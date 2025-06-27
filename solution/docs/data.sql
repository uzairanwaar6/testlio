INSERT INTO `issues` (`title`, `description`, `created_by`, `created_at`, `updated_by`, `updated_at`) VALUES
('Login not working', 'User reports that login fails with valid credentials.', 'alice', NOW(), NULL, NOW()),
('Page crashes on load', 'The dashboard page crashes when accessed on Firefox.', 'bob', NOW(), NULL, NOW()),
('Broken link on homepage', 'The "Contact Us" link redirects to a 404 page.', 'charlie', NOW(), NULL, NOW()),
('Search is too slow', 'Searching large datasets takes over 10 seconds.', 'diana', NOW(), NULL, NOW()),
('Export to CSV broken', 'CSV export produces corrupted files.', 'edward', NOW(), NULL, NOW()),
('Notification not sent', 'Email notifications are not triggered for new comments.', 'frank', NOW(), NULL, NOW()),
('Wrong total in invoice', 'Total amount calculation is off by a few cents.', 'george', NOW(), NULL, NOW()),
('Mobile view misaligned', 'Layout breaks on iPhone SE screen size.', 'hannah', NOW(), NULL, NOW()),
('Signup form error', 'Form validation fails even when all fields are valid.', 'ian', NOW(), NULL, NOW()),
('Timezone issue', 'Timestamps show incorrect time in reports for GMT users.', 'julia', NOW(), NULL, NOW()),
('Password reset fails', 'Password reset emails are not being sent to users.', 'alice', NOW(), NULL, NOW()),
('Dropdown menu overlaps', 'Navigation menu overlaps footer on scroll.', 'bob', NOW(), NULL, NOW()),
('API returns 500', 'API returns 500 error for valid input payloads.', 'charlie', NOW(), NULL, NOW()),
('Slow image upload', 'Image upload takes unusually long to complete.', 'diana', NOW(), NULL, NOW()),
('PDF not generated', 'Download as PDF option generates empty files.', 'edward', NOW(), NULL, NOW()),
('Comments not saving', 'User comments are not being stored in the DB.', 'frank', NOW(), NULL, NOW()),
('Admin role missing', 'New admin users do not get admin permissions.', 'george', NOW(), NULL, NOW()),
('Dark mode flickers', 'UI flickers when toggling dark mode rapidly.', 'hannah', NOW(), NULL, NOW()),
('Empty notifications', 'Notification panel shows blank entries.', 'ian', NOW(), NULL, NOW()),
('Scroll bar missing', 'Horizontal scrollbar missing in wide tables.', 'julia', NOW(), NULL, NOW()),
('Form resets randomly', 'Form fields clear while typing due to JS bug.', 'alice', NOW(), NULL, NOW()),
('User avatar not loading', 'Avatars show broken image icon.', 'bob', NOW(), NULL, NOW()),
('Auto logout too fast', 'Users are logged out after only 5 minutes.', 'charlie', NOW(), NULL, NOW()),
('Profile updates fail', 'Saving user profile returns 403 error.', 'diana', NOW(), NULL, NOW()),
('Table filter not working', 'Filter on user table has no effect.', 'edward', NOW(), NULL, NOW()),
('Data duplication', 'Duplicate entries shown in report export.', 'frank', NOW(), NULL, NOW()),
('Captcha not visible', 'Captcha fails to render on contact form.', 'george', NOW(), NULL, NOW()),
('Search case sensitive', 'Search does not find results with different casing.', 'hannah', NOW(), NULL, NOW()),
('Session expires early', 'User sessions expire before configured time.', 'ian', NOW(), NULL, NOW()),
('Missing tooltips', 'Form inputs lack helpful tooltips.', 'julia', NOW(), NULL, NOW()),
('Currency mismatch', 'Prices shown in wrong currency on checkout.', 'alice', NOW(), NULL, NOW()),
('Email format check broken', 'Invalid emails are accepted in signup form.', 'bob', NOW(), NULL, NOW()),
('Keyboard navigation broken', 'Tabbing skips fields on signup form.', 'charlie', NOW(), NULL, NOW()),
('Delayed notifications', 'Push notifications arrive several minutes late.', 'diana', NOW(), NULL, NOW()),
('Audit log missing', 'No logs found for user delete actions.', 'edward', NOW(), NULL, NOW()),
('PDF orientation wrong', 'Exported PDF is in portrait instead of landscape.', 'frank', NOW(), NULL, NOW()),
('Analytics not showing', 'Google Analytics data not appearing in dashboard.', 'george', NOW(), NULL, NOW()),
('Favorites not saving', 'Favoriting a project has no effect.', 'hannah', NOW(), NULL, NOW()),
('Loading spinner stuck', 'Loader never disappears on slow connections.', 'ian', NOW(), NULL, NOW()),
('Status not updating', 'Task status changes don’t persist.', 'julia', NOW(), NULL, NOW()),
('Field validation bypassed', 'Client-side validation can be skipped via dev tools.', 'alice', NOW(), NULL, NOW()),
('2FA codes invalid', 'Generated 2FA codes are always rejected.', 'bob', NOW(), NULL, NOW()),
('Language switch fails', 'Switching language doesn’t change UI.', 'charlie', NOW(), NULL, NOW()),
('Tags not removable', 'Cannot delete tags once added to issue.', 'diana', NOW(), NULL, NOW()),
('Autocomplete too aggressive', 'Auto-fill suggests irrelevant values.', 'edward', NOW(), NULL, NOW()),
('Incorrect avatar shown', 'Wrong image appears for some user profiles.', 'frank', NOW(), NULL, NOW()),
('Broken pagination', 'Next/previous buttons do nothing.', 'george', NOW(), NULL, NOW()),
('Date picker bug', 'Cannot select date beyond current year.', 'hannah', NOW(), NULL, NOW()),
('CSV delimiter incorrect', 'CSV export uses semicolon instead of comma.', 'ian', NOW(), NULL, NOW()),
('Default role missing', 'New users created with no roles assigned.', 'julia', NOW(), NULL, NOW()),
('Multiple login sessions not allowed', 'Users can’t log in from multiple devices.', 'alice', NOW(), NULL, NOW()),
('Live chat not loading', 'Customer support widget does not appear.', 'bob', NOW(), NULL, NOW());

-- Issue ID 1
UPDATE `issues` SET `description` = CONCAT(`description`, ' Escalated to the engineering team for critical fix.'), `updated_at` = NOW() WHERE `id` = 1;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Clarified Issue Summary'), `updated_at` = NOW() WHERE `id` = 1;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Duplicate Resolved'), `description` = CONCAT(`description`, ' Marked as resolved after final QA approval.'), `updated_at` = NOW() WHERE `id` = 1;

-- Issue ID 2
UPDATE `issues` SET `title` = CONCAT(`title`, ' - UI Fix Applied'), `updated_at` = NOW() WHERE `id` = 2;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Applied UI tweaks for better readability.'), `updated_at` = NOW() WHERE `id` = 2;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Final Revision'), `description` = CONCAT(`description`, ' Root cause identified and fix is in progress.'), `updated_at` = NOW() WHERE `id` = 2;

-- Issue ID 3
UPDATE `issues` SET `description` = CONCAT(`description`, ' Clarified the issue description based on user feedback.'), `updated_at` = NOW() WHERE `id` = 3;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Duplicate Resolved'), `updated_at` = NOW() WHERE `id` = 3;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Status Updated'), `description` = CONCAT(`description`, ' Root cause identified and fix is in progress.'), `updated_at` = NOW() WHERE `id` = 3;

-- Issue ID 4
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Clarified Issue Summary'), `updated_at` = NOW() WHERE `id` = 4;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Escalated to the engineering team for critical fix.'), `updated_at` = NOW() WHERE `id` = 4;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Marked as resolved after final QA approval.'), `updated_at` = NOW() WHERE `id` = 4;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Status Updated'), `updated_at` = NOW() WHERE `id` = 4;

-- Issue ID 5
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Status Updated'), `updated_at` = NOW() WHERE `id` = 5;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Applied UI tweaks for better readability.'), `updated_at` = NOW() WHERE `id` = 5;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Performance Optimized'), `updated_at` = NOW() WHERE `id` = 5;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Clarified the issue description based on user feedback.'), `updated_at` = NOW() WHERE `id` = 5;

-- Issue ID 6
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Final Revision'), `updated_at` = NOW() WHERE `id` = 6;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Removed redundant information and streamlined content.'), `updated_at` = NOW() WHERE `id` = 6;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - UI Fix Applied'), `updated_at` = NOW() WHERE `id` = 6;

-- Issue ID 7
UPDATE `issues` SET `description` = CONCAT(`description`, ' Marked as resolved after final QA approval.'), `updated_at` = NOW() WHERE `id` = 7;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Error Handling Improved'), `description` = CONCAT(`description`, ' Clarified the issue description based on user feedback.'), `updated_at` = NOW() WHERE `id` = 7;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Duplicate Resolved'), `updated_at` = NOW() WHERE `id` = 7;

-- Issue ID 8
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Final Revision'), `updated_at` = NOW() WHERE `id` = 8;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Performance improvements have been deployed.'), `updated_at` = NOW() WHERE `id` = 8;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Escalated to the engineering team for critical fix.'), `updated_at` = NOW() WHERE `id` = 8;

-- Issue ID 9
UPDATE `issues` SET `title` = CONCAT(`title`, ' - UI Fix Applied'), `updated_at` = NOW() WHERE `id` = 9;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Applied UI tweaks for better readability.'), `updated_at` = NOW() WHERE `id` = 9;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Clarified Issue Summary'), `updated_at` = NOW() WHERE `id` = 9;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Root cause identified and fix is in progress.'), `updated_at` = NOW() WHERE `id` = 9;

-- Issue ID 10
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Status Updated'), `description` = CONCAT(`description`, ' Clarified the issue description based on user feedback.'), `updated_at` = NOW() WHERE `id` = 10;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Removed redundant information and streamlined content.'), `updated_at` = NOW() WHERE `id` = 10;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Final Revision'), `updated_at` = NOW() WHERE `id` = 10;

-- Issue ID 11
UPDATE `issues` SET `title` = CONCAT(`title`, ' - UI Fix Applied'), `updated_at` = NOW() WHERE `id` = 11;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Root cause identified and fix is in progress.'), `updated_at` = NOW() WHERE `id` = 11;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Clarified Issue Summary'), `description` = CONCAT(`description`, ' Clarified the issue description based on user feedback.'), `updated_at` = NOW() WHERE `id` = 11;

-- Issue ID 12
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Duplicate Resolved'), `updated_at` = NOW() WHERE `id` = 12;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Marked as resolved after final QA approval.'), `updated_at` = NOW() WHERE `id` = 12;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Final Revision'), `updated_at` = NOW() WHERE `id` = 12;

-- Issue ID 13
UPDATE `issues` SET `description` = CONCAT(`description`, ' Applied UI tweaks for better readability.'), `updated_at` = NOW() WHERE `id` = 13;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Performance Optimized'), `updated_at` = NOW() WHERE `id` = 13;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Status Updated'), `description` = CONCAT(`description`, ' Escalated to the engineering team for critical fix.'), `updated_at` = NOW() WHERE `id` = 13;

-- Issue ID 14
UPDATE `issues` SET `description` = CONCAT(`description`, ' Clarified the issue description based on user feedback.'), `updated_at` = NOW() WHERE `id` = 14;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - UI Fix Applied'), `updated_at` = NOW() WHERE `id` = 14;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Root cause identified and fix is in progress.'), `updated_at` = NOW() WHERE `id` = 14;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Final Revision'), `updated_at` = NOW() WHERE `id` = 14;

-- Issue ID 15
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Clarified Issue Summary'), `description` = CONCAT(`description`, ' Marked as resolved after final QA approval.'), `updated_at` = NOW() WHERE `id` = 15;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - UI Fix Applied'), `updated_at` = NOW() WHERE `id` = 15;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Applied UI tweaks for better readability.'), `updated_at` = NOW() WHERE `id` = 15;

-- Issue ID 16
UPDATE `issues` SET `description` = CONCAT(`description`, ' Removed redundant information and streamlined content.'), `updated_at` = NOW() WHERE `id` = 16;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Status Updated'), `updated_at` = NOW() WHERE `id` = 16;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Escalated to the engineering team for critical fix.'), `updated_at` = NOW() WHERE `id` = 16;

-- Issue ID 17
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Final Revision'), `updated_at` = NOW() WHERE `id` = 17;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Clarified the issue description based on user feedback.'), `updated_at` = NOW() WHERE `id` = 17;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Performance Optimized'), `description` = CONCAT(`description`, ' Root cause identified and fix is in progress.'), `updated_at` = NOW() WHERE `id` = 17;

-- Issue ID 18
UPDATE `issues` SET `description` = CONCAT(`description`, ' Escalated to the engineering team for critical fix.'), `updated_at` = NOW() WHERE `id` = 18;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Duplicate Resolved'), `updated_at` = NOW() WHERE `id` = 18;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - UI Fix Applied'), `description` = CONCAT(`description`, ' Clarified the issue description based on user feedback.'), `updated_at` = NOW() WHERE `id` = 18;

-- Issue ID 19
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Clarified Issue Summary'), `updated_at` = NOW() WHERE `id` = 19;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Marked as resolved after final QA approval.'), `updated_at` = NOW() WHERE `id` = 19;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Applied UI tweaks for better readability.'), `updated_at` = NOW() WHERE `id` = 19;

-- Issue ID 20
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Final Revision'), `updated_at` = NOW() WHERE `id` = 20;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Status Updated'), `updated_at` = NOW() WHERE `id` = 20;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Clarified the issue description based on user feedback.'), `updated_at` = NOW() WHERE `id` = 20;

-- Issue ID 21
UPDATE `issues` SET `description` = CONCAT(`description`, ' Performance review indicates improvement.'), `updated_at` = NOW() WHERE `id` = 21;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Regression Fixed'), `updated_at` = NOW() WHERE `id` = 21;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - UI Tweak Complete'), `description` = CONCAT(`description`, ' Fix tested and verified by QA team.'), `updated_at` = NOW() WHERE `id` = 21;

-- Issue ID 22
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Clarity Improved'), `updated_at` = NOW() WHERE `id` = 22;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Issue now only occurs under rare conditions.'), `updated_at` = NOW() WHERE `id` = 22;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Suggested workaround documented.'), `updated_at` = NOW() WHERE `id` = 22;

-- Issue ID 23
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Final Update'), `updated_at` = NOW() WHERE `id` = 23;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Updated error response format.'), `updated_at` = NOW() WHERE `id` = 23;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Retry Logic Added'), `updated_at` = NOW() WHERE `id` = 23;

-- Issue ID 24
UPDATE `issues` SET `description` = CONCAT(`description`, ' Additional logs provided for debugging.'), `updated_at` = NOW() WHERE `id` = 24;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Clarified'), `updated_at` = NOW() WHERE `id` = 24;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - QA Passed'), `description` = CONCAT(`description`, ' Re-tested on staging and passed.'), `updated_at` = NOW() WHERE `id` = 24;

-- Issue ID 25
UPDATE `issues` SET `description` = CONCAT(`description`, ' Clarified duplication logic.'), `updated_at` = NOW() WHERE `id` = 25;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Verified Fix'), `updated_at` = NOW() WHERE `id` = 25;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Logs confirm fix is effective.'), `updated_at` = NOW() WHERE `id` = 25;

-- Issue ID 26
UPDATE `issues` SET `description` = CONCAT(`description`, ' Captcha library updated to latest version.'), `updated_at` = NOW() WHERE `id` = 26;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Library Updated'), `updated_at` = NOW() WHERE `id` = 26;
UPDATE `issues` SET `description` = CONCAT(`description`, ' No further complaints since last deployment.'), `updated_at` = NOW() WHERE `id` = 26;

-- Issue ID 27
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Insensitive Search Added'), `updated_at` = NOW() WHERE `id` = 27;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Case-insensitive matching enabled.'), `updated_at` = NOW() WHERE `id` = 27;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Final Fix Deployed'), `description` = CONCAT(`description`, ' User feedback is positive.'), `updated_at` = NOW() WHERE `id` = 27;

-- Issue ID 28
UPDATE `issues` SET `description` = CONCAT(`description`, ' Session token lifetime increased.'), `updated_at` = NOW() WHERE `id` = 28;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Fixed Timeout Issue'), `updated_at` = NOW() WHERE `id` = 28;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - User Session Stable'), `description` = CONCAT(`description`, ' No session drops reported post fix.'), `updated_at` = NOW() WHERE `id` = 28;

-- Issue ID 29
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Enhanced UX'), `updated_at` = NOW() WHERE `id` = 29;
UPDATE `issues` SET `description` = CONCAT(`description`, ' All fields now include context-specific tooltips.'), `updated_at` = NOW() WHERE `id` = 29;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Feedback Applied'), `updated_at` = NOW() WHERE `id` = 29;

-- Issue ID 30
UPDATE `issues` SET `description` = CONCAT(`description`, ' Currency detection logic updated.'), `updated_at` = NOW() WHERE `id` = 30;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Multi-Currency Support'), `updated_at` = NOW() WHERE `id` = 30;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - UX Updated'), `description` = CONCAT(`description`, ' Checkout now shows regional prices.'), `updated_at` = NOW() WHERE `id` = 30;

-- Issue ID 31
UPDATE `issues` SET `description` = CONCAT(`description`, ' Validation updated with stricter regex.'), `updated_at` = NOW() WHERE `id` = 31;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Regex Enhanced'), `updated_at` = NOW() WHERE `id` = 31;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - QA Validated'), `updated_at` = NOW() WHERE `id` = 31;

-- Issue ID 32
UPDATE `issues` SET `description` = CONCAT(`description`, ' Added support for accessibility navigation.'), `updated_at` = NOW() WHERE `id` = 32;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Keyboard Navigation Fixed'), `updated_at` = NOW() WHERE `id` = 32;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Users can tab through all fields correctly.'), `updated_at` = NOW() WHERE `id` = 32;

-- Issue ID 33
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Push Delay Mitigated'), `updated_at` = NOW() WHERE `id` = 33;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Push service response time improved by 50%.'), `updated_at` = NOW() WHERE `id` = 33;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Optimized'), `description` = CONCAT(`description`, ' No lag observed since patch release.'), `updated_at` = NOW() WHERE `id` = 33;

-- Issue ID 34
UPDATE `issues` SET `description` = CONCAT(`description`, ' Logging for deletes has been restored.'), `updated_at` = NOW() WHERE `id` = 34;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Logging Restored'), `updated_at` = NOW() WHERE `id` = 34;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Admin audit now fully functional.'), `updated_at` = NOW() WHERE `id` = 34;

-- Issue ID 35
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Orientation Fixed'), `updated_at` = NOW() WHERE `id` = 35;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Landscape mode now default for PDF export.'), `updated_at` = NOW() WHERE `id` = 35;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Consistent Output'), `description` = CONCAT(`description`, ' PDFs render correctly on all browsers.'), `updated_at` = NOW() WHERE `id` = 35;

-- Issue ID 36
UPDATE `issues` SET `description` = CONCAT(`description`, ' Connected Google Analytics successfully.'), `updated_at` = NOW() WHERE `id` = 36;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Dashboard Fix'), `updated_at` = NOW() WHERE `id` = 36;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Reporting Bug Fixed'), `description` = CONCAT(`description`, ' Analytics tab now populates correctly.'), `updated_at` = NOW() WHERE `id` = 36;

-- Issue ID 37
UPDATE `issues` SET `description` = CONCAT(`description`, ' Starred projects are saved persistently.'), `updated_at` = NOW() WHERE `id` = 37;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Favorite Function Fixed'), `updated_at` = NOW() WHERE `id` = 37;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Logic Simplified'), `updated_at` = NOW() WHERE `id` = 37;

-- Issue ID 38
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Spinner Timeout Set'), `updated_at` = NOW() WHERE `id` = 38;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Spinner hidden after 10 seconds.'), `updated_at` = NOW() WHERE `id` = 38;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Users now notified of long operations.'), `updated_at` = NOW() WHERE `id` = 38;

-- Issue ID 39
UPDATE `issues` SET `description` = CONCAT(`description`, ' Status correctly syncs with backend now.'), `updated_at` = NOW() WHERE `id` = 39;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Sync Fixed'), `updated_at` = NOW() WHERE `id` = 39;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - UI Confirmed'), `description` = CONCAT(`description`, ' User-side changes retained post-refresh.'), `updated_at` = NOW() WHERE `id` = 39;

-- Issue ID 40
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Bypass Patched'), `updated_at` = NOW() WHERE `id` = 40;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Client-side JS now backed by strict server validation.'), `updated_at` = NOW() WHERE `id` = 40;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Validation Enforced'), `description` = CONCAT(`description`, ' DevTools bypass no longer effective.'), `updated_at` = NOW() WHERE `id` = 40;

-- Issue ID 41
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Retry Logic Enhanced'), `updated_at` = NOW() WHERE `id` = 41;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Users now receive meaningful error messages.'), `updated_at` = NOW() WHERE `id` = 41;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Token Sync Added'), `updated_at` = NOW() WHERE `id` = 41;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Updated security flow for improved token handling.'), `updated_at` = NOW() WHERE `id` = 41;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Logging indicates 2FA codes are now accepted.'), `updated_at` = NOW() WHERE `id` = 41;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - QA Verified'), `updated_at` = NOW() WHERE `id` = 41;

-- Issue ID 42
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Language Switching Patched'), `updated_at` = NOW() WHERE `id` = 42;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Now dynamically switches UI language.'), `updated_at` = NOW() WHERE `id` = 42;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Added fallback language handling.'), `updated_at` = NOW() WHERE `id` = 42;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Multilingual Test Passed'), `updated_at` = NOW() WHERE `id` = 42;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Translation Keys Refactored'), `updated_at` = NOW() WHERE `id` = 42;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Fixed typo in locale config file.'), `updated_at` = NOW() WHERE `id` = 42;

-- Issue ID 43
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Tag Deletion Fixed'), `updated_at` = NOW() WHERE `id` = 43;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Removed confirm modal blocker.'), `updated_at` = NOW() WHERE `id` = 43;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Updated API endpoint to accept tag removal.'), `updated_at` = NOW() WHERE `id` = 43;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - UX Updated'), `updated_at` = NOW() WHERE `id` = 43;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Tags now disappear immediately after deletion.'), `updated_at` = NOW() WHERE `id` = 43;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Success Feedback Added'), `updated_at` = NOW() WHERE `id` = 43;

-- Issue ID 44
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Smarter Suggestions Enabled'), `updated_at` = NOW() WHERE `id` = 44;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Irrelevant autofill entries removed.'), `updated_at` = NOW() WHERE `id` = 44;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Suggestions now prioritize recent entries.'), `updated_at` = NOW() WHERE `id` = 44;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Autocomplete UX Improved'), `updated_at` = NOW() WHERE `id` = 44;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Backend Adjusted'), `updated_at` = NOW() WHERE `id` = 44;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Removed hardcoded suggestions from JS.'), `updated_at` = NOW() WHERE `id` = 44;

-- Issue ID 45
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Avatar Matching Fixed'), `updated_at` = NOW() WHERE `id` = 45;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Avatar now pulls from correct user profile.'), `updated_at` = NOW() WHERE `id` = 45;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Race condition between user load and avatar fetch resolved.'), `updated_at` = NOW() WHERE `id` = 45;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Verified via QA'), `updated_at` = NOW() WHERE `id` = 45;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Default image now used for missing avatars.'), `updated_at` = NOW() WHERE `id` = 45;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Hotfix Applied'), `updated_at` = NOW() WHERE `id` = 45;

-- Issue ID 46
UPDATE `issues` SET `description` = CONCAT(`description`, ' Pagination logic revised to respect total count.'), `updated_at` = NOW() WHERE `id` = 46;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Pagination Button Fixed'), `updated_at` = NOW() WHERE `id` = 46;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Offset Bug Resolved'), `updated_at` = NOW() WHERE `id` = 46;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Next/Prev logic tested on 100+ entries.'), `updated_at` = NOW() WHERE `id` = 46;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Paging Now Working'), `updated_at` = NOW() WHERE `id` = 46;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Pagination now handles edge cases correctly.'), `updated_at` = NOW() WHERE `id` = 46;

-- Issue ID 47
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Future Years Allowed'), `updated_at` = NOW() WHERE `id` = 47;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Year range extended to +10 years.'), `updated_at` = NOW() WHERE `id` = 47;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Fixed JS validation blocking future dates.'), `updated_at` = NOW() WHERE `id` = 47;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Picker UX Enhanced'), `updated_at` = NOW() WHERE `id` = 47;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Edge Case Tested'), `updated_at` = NOW() WHERE `id` = 47;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Leap year support also verified.'), `updated_at` = NOW() WHERE `id` = 47;

-- Issue ID 48
UPDATE `issues` SET `description` = CONCAT(`description`, ' Delimiter setting now user-configurable.'), `updated_at` = NOW() WHERE `id` = 48;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Export Format Corrected'), `updated_at` = NOW() WHERE `id` = 48;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - CSV Settings Updated'), `updated_at` = NOW() WHERE `id` = 48;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Output verified in Excel and LibreOffice.'), `updated_at` = NOW() WHERE `id` = 48;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Column headers no longer wrapped in quotes.'), `updated_at` = NOW() WHERE `id` = 48;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Delimiter Switch Feature Added'), `updated_at` = NOW() WHERE `id` = 48;

-- Issue ID 49
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Role Auto-Assign Fixed'), `updated_at` = NOW() WHERE `id` = 49;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Default user role now set on creation.'), `updated_at` = NOW() WHERE `id` = 49;
UPDATE `issues` SET `description` = CONCAT(`description`, ' DB migration included for missing roles.'), `updated_at` = NOW() WHERE `id` = 49;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Registration Flow Enhanced'), `updated_at` = NOW() WHERE `id` = 49;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - QA Feedback Addressed'), `updated_at` = NOW() WHERE `id` = 49;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Role dropdown also updated in admin panel.'), `updated_at` = NOW() WHERE `id` = 49;

-- Issue ID 50
UPDATE `issues` SET `description` = CONCAT(`description`, ' Widget loaded after 2s delay for optimization.'), `updated_at` = NOW() WHERE `id` = 50;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Lazy Load Enabled'), `updated_at` = NOW() WHERE `id` = 50;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Live chat integrated with fallback retry logic.'), `updated_at` = NOW() WHERE `id` = 50;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - External Script Fixed'), `updated_at` = NOW() WHERE `id` = 50;
UPDATE `issues` SET `title` = CONCAT(`title`, ' - Chat Now Stable'), `updated_at` = NOW() WHERE `id` = 50;
UPDATE `issues` SET `description` = CONCAT(`description`, ' Widget loading is now conditional on network speed.'), `updated_at` = NOW() WHERE `id` = 50;


