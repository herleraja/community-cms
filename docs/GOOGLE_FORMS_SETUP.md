# Google Forms Registration Setup Guide

This guide explains how to set up Google Forms for event registration with automatic email notifications and calendar invites.

## Overview

Instead of building a custom registration system, we use Google Forms which:

- ✅ Automatically saves responses to Google Sheets
- ✅ Can send email confirmations with Google Apps Script
- ✅ Can include calendar invites in emails
- ✅ Requires no backend code or API keys
- ✅ Is completely free and managed by Google

## Step 1: Create a Google Form

1. Go to [Google Forms](https://forms.google.com)
2. Click **+ Blank** to create a new form
3. Name your form (e.g., "Cultural Festival 2026 Registration")

### Add Form Fields

Add the following questions:

- **Name** (Short answer, Required)
- **Email** (Short answer, Required, with email validation)
- **Phone Number** (Short answer, Required)

You can add more fields as needed (e.g., Number of attendees, Dietary restrictions, etc.)

### Configure Form Settings

1. Click the **Settings** gear icon
2. Under **Responses**:
   - ✅ Check "Collect email addresses" (OPTIONAL - see note below)
   - ✅ Check "Limit to 1 response" (optional)
   - ✅ Check "Send respondents a copy of their response"

**Note:** If you enable "Collect email addresses", the email will be at index 1 in the script. If disabled, it will be at index 2 (from your form question).

## Step 2: Link to Google Sheets

1. In your form, click the **Responses** tab
2. Click the Google Sheets icon (green spreadsheet)
3. Choose "Create a new spreadsheet"
4. Name it (e.g., "Event Registrations")
5. Click **Create**

This will automatically save all form responses to the spreadsheet.

## Step 3: Set Up Email Notifications with Calendar Invite

### Create Apps Script (Done in Google Sheets)

**Important: These steps are done in the Google Sheet, NOT in the Google Form**

1. **Open your Google Sheet** (the one that was created and linked to your form in Step 2)
2. In the Google Sheet, go to **Extensions** > **Apps Script**
3. This will open a new tab with the Apps Script editor
4. Delete any existing code in the editor
5. Paste the following script:

```javascript
function onFormSubmit(e) {
  try {
    // Get form response values
    // IMPORTANT: Adjust these indices based on YOUR form structure
    // Run testFormStructure() function to see your exact structure

    var timestamp = e.values[0]; // Always timestamp

    // Check your form structure - these are the two most common setups:

    // OPTION 1: If "Collect email addresses" is ENABLED in form settings
    // Structure: [timestamp, email, name, phone]
    // var email = e.values[1];
    // var name = e.values[2];
    // var phone = e.values[3];

    // OPTION 2: If "Collect email addresses" is DISABLED
    // Structure: [timestamp, name, email, phone]
    var name = e.values[1]; // First question (Name)
    var email = e.values[2]; // Second question (Email)
    var phone = e.values[3]; // Third question (Phone)

    // Log values for debugging
    Logger.log("Timestamp: " + timestamp);
    Logger.log("Email: " + email);
    Logger.log("Name: " + name);
    Logger.log("Phone: " + phone);

    // Validate email
    if (!email || email.indexOf("@") === -1) {
      Logger.log("Invalid email address: " + email);
      return;
    }

    // Event details - UPDATE THESE FOR EACH EVENT
    var eventTitle = "Cultural Festival 2026";
    var eventDate = "August 15, 2026";
    var eventTime = "14:00 - 20:00";
    var eventLocation =
      "Messe Frankfurt, Ludwig-Erhard-Anlage 1, 60327 Frankfurt am Main, Germany";
    var eventDescription =
      "Join us for an evening filled with culture, community, and celebration.";

    // Parse event date and time for calendar
    var startDate = new Date("2026-08-15T14:00:00+02:00"); // Add timezone
    var endDate = new Date("2026-08-15T20:00:00+02:00"); // Add timezone

    // Validate dates
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      Logger.log("Invalid date format");
      return;
    }

    // Create calendar event and send invite
    try {
      var calendarEvent = CalendarApp.getDefaultCalendar().createEvent(
        eventTitle,
        startDate,
        endDate,
        {
          description: eventDescription,
          location: eventLocation,
          guests: email,
          sendInvites: true,
        },
      );
      Logger.log("Calendar event created successfully");
    } catch (calError) {
      Logger.log("Calendar error: " + calError.toString());
      // Continue to send email even if calendar fails
    }

    // Send confirmation email
    var subject = "Registration Confirmed: " + eventTitle;

    var htmlBody =
      '<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">' +
      '<h2 style="color: #333;">Registration Confirmed!</h2>' +
      "<p>Dear " +
      name +
      ",</p>" +
      "<p>Thank you for registering for <strong>" +
      eventTitle +
      "</strong>.</p>" +
      '<div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">' +
      '<h3 style="margin-top: 0;">Event Details:</h3>' +
      "<p><strong>Date:</strong> " +
      eventDate +
      "</p>" +
      "<p><strong>Time:</strong> " +
      eventTime +
      "</p>" +
      "<p><strong>Venue:</strong> " +
      eventLocation +
      "</p>" +
      "</div>" +
      "<p>A calendar invite has been sent to your email. Please add it to your calendar.</p>" +
      "<p><strong>Your Registration Details:</strong></p>" +
      "<ul>" +
      "<li>Name: " +
      name +
      "</li>" +
      "<li>Email: " +
      email +
      "</li>" +
      "<li>Phone: " +
      phone +
      "</li>" +
      "</ul>" +
      "<p>We look forward to seeing you at the event!</p>" +
      '<p style="margin-top: 30px;">' +
      "Best regards,<br>" +
      "<strong>Community Organization Team</strong>" +
      "</p>" +
      "</div>";

    // Send email
    MailApp.sendEmail({
      to: email,
      subject: subject,
      htmlBody: htmlBody,
    });

    Logger.log("Confirmation email sent successfully to: " + email);
  } catch (error) {
    Logger.log("Error in onFormSubmit: " + error.toString());
    Logger.log("Error stack: " + error.stack);
  }
}

// Test function to check your form structure
function testFormStructure() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var lastRow = sheet.getLastRow();

  if (lastRow < 2) {
    Logger.log("No form responses yet. Submit a test response first.");
    return;
  }

  var values = sheet
    .getRange(lastRow, 1, 1, sheet.getLastColumn())
    .getValues()[0];

  Logger.log("Form response structure:");
  for (var i = 0; i < values.length; i++) {
    Logger.log("Index " + i + ": " + values[i]);
  }
}
```

5. Click **Save** (disk icon at the top)
6. Name your project (e.g., "Event Registration Automation")

### Set Up Trigger (Still in Apps Script Editor)

**Important: You're still in the Apps Script editor (opened from Google Sheets)**

1. In the Apps Script editor, click the **Triggers** icon (clock/alarm icon) on the left sidebar
2. Click **+ Add Trigger** button (bottom right)
3. Configure the trigger settings:
   - **Choose which function to run:** `onFormSubmit`
   - **Choose which deployment should run:** `Head`
   - **Select event source:** `From spreadsheet`
   - **Select event type:** `On form submit`
4. Click **Save**
5. **Grant permissions when prompted:**
   - Click "Review permissions"
   - Choose your Google account
   - Click "Advanced" if you see a warning
   - Click "Go to [Project Name] (unsafe)"
   - Click "Allow"

**What this does:** Every time someone submits the Google Form, the spreadsheet receives a new row, which triggers the `onFormSubmit` function to send the email and calendar invite.

## Step 4: Get the Embed URL

1. Go back to your Google Form
2. Click **Send** button (top right)
3. Click the **< >** (embed) icon
4. Copy the URL from the iframe src attribute
   - It looks like: `https://docs.google.com/forms/d/e/FORM_ID/viewform?embedded=true`
5. Copy this entire URL

## Step 5: Add to Your Website

### Update Event Data

Open `lib/content.ts` and add the `googleFormUrl` to your event:

```typescript
{
  id: "1",
  title: "Cultural Festival 2026",
  date: "2026-08-15",
  time: "14:00 - 20:00",
  venueAddress: "Messe Frankfurt, Ludwig-Erhard-Anlage 1, 60327 Frankfurt am Main, Germany",
  description: "Join us for an evening filled with culture...",
  image: "https://...",
  googleFormUrl: "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
}
```

### Remove Old registerLink (Optional)

If you had a `registerLink` before, you can remove it or keep both. The form will only show if `googleFormUrl` is present.

## Step 6: Test

1. Start your development server: `npm run dev`
2. Navigate to the event details page
3. Fill out the embedded form
4. Submit the form
5. Verify:
   - ✅ Response appears in Google Sheet
   - ✅ Confirmation email received
   - ✅ Calendar invite received
   - ✅ Calendar event added to Google Calendar

## Customization

### Customize Email Template

In the Apps Script, modify the `htmlBody` variable to change:

- Email styling
- Content
- Branding
- Additional information

### Add More Form Fields

1. Add fields to your Google Form
2. Update the Apps Script to access new fields:
   ```javascript
   var newField = e.values[4]; // Adjust index based on field position
   ```
3. Include new fields in the email template

### Multiple Events

For multiple events, you can:

**Option 1: Create separate forms for each event**

- Each event has its own form and Apps Script
- Each form has its own `googleFormUrl`

**Option 2: Use one form with event selection**

- Add a dropdown to select the event
- Update Apps Script to handle different events based on selection

## Troubleshooting

### "Invalid argument" Error

If you see an error like `Exception: Invalid argument: test` or similar:

1. **Run the test function first:**
   - In Apps Script, select `testFormStructure` from the function dropdown (top toolbar)
   - Click **Run** (play button)
   - Check the logs: View > Logs (or Ctrl+Enter)
   - This shows you the structure of your form responses

2. **Adjust the index values:**
   - The error usually means the email or name is at a different index
   - Update the `e.values[X]` indices in the script based on what you see in the logs
   - Common structures:
     - With "Collect email addresses" enabled: `[timestamp, email, name, phone]`
     - Without it: `[timestamp, name, email, phone]`

3. **Check your form settings:**
   - Go to your Google Form
   - Click Settings (gear icon)
   - Under "Responses", ensure "Collect email addresses" is checked
   - This puts email at index 1

4. **Test with a real submission:**
   - Submit a test response through your form
   - Check the Google Sheet to see the column order
   - Update the script indices to match the actual column positions

### Emails Not Sending

1. Check Apps Script execution logs:
   - Go to Apps Script > **Executions** (left sidebar)
   - Look for errors
2. Verify trigger is set up correctly
3. Check email quota (Google allows ~100 emails/day for free accounts)
4. Ensure the email address in the form response is valid

### Calendar Invites Not Working

1. Verify date/time format in Apps Script
2. Check that `sendInvites: true` is set
3. Ensure the email address is valid

### Form Not Displaying

1. Verify the `googleFormUrl` is correct
2. Check that the form is set to accept responses
3. Ensure the form is not restricted to your organization only

### Responses Not Saving

1. Verify the form is linked to a Google Sheet
2. Check that the trigger is set up on the correct spreadsheet
3. Test by submitting the form directly (not embedded)

## Best Practices

1. **Test thoroughly** before going live
2. **Backup your spreadsheet** regularly
3. **Monitor email quota** if expecting many registrations
4. **Update event details** in Apps Script for each new event
5. **Keep form simple** - only ask for essential information
6. **Add confirmation message** in form settings
7. **Set response limits** if needed (e.g., max 100 attendees)

## Security & Privacy

- Google Forms are secure and GDPR compliant
- Only you can see the responses
- Respondents can request data deletion
- Consider adding a privacy policy link in your form
- Don't collect unnecessary personal information

## Cost

- ✅ **Completely FREE**
- No API keys needed
- No backend infrastructure
- No email service costs
- Google handles everything

## Support

For Google Forms help:

- [Google Forms Help Center](https://support.google.com/docs/topic/9054603)
- [Apps Script Documentation](https://developers.google.com/apps-script)

For website integration issues:

- Check the browser console for errors
- Verify the iframe URL is correct
- Ensure the form is publicly accessible
