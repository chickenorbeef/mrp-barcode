Here's what's new in this script:
createTrigger() function: This function creates a time-based trigger that runs the processQueue function every minute.
deleteTrigger() function: This helper function deletes any existing triggers for the specified function name. This is useful to avoid creating duplicate triggers.
setupTrigger() function: This is a one-time setup function that you'll need to run manually to create the trigger.
To set up the trigger:
Save this script in your Google Apps Script project.
Run the setupTrigger() function once. You can do this by:
Opening the script editor
Selecting setupTrigger from the function dropdown menu (next to the "Debug" button)
Clicking the "Run" button (play icon)
After running setupTrigger(), the trigger will be created, and processQueue() will run automatically every minute.
Important notes:
Make sure you have authorization to create triggers. You might need to run the script manually once and accept the permissions prompt.
Google Apps Script has quotas and limitations. For example, there's a limit of 20 triggers per user per script. Make sure you're within these limits.
The time-based trigger might not run exactly every minute. There can be a delay of up to several minutes, especially if there are many triggers running in your Google account.
With this setup, your script will queue updates as they come in via doPost(), and process them in batches every minute, which should help prevent lost updates and improve performance.