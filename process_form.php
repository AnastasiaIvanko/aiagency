<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $projectType = strip_tags(trim($_POST["project_type"]));
    $projectDetails = strip_tags(trim($_POST["project_details"]));
    $projectGoals = strip_tags(trim($_POST["project_goals"]));
    $targetAudience = strip_tags(trim($_POST["target_audience"]));
    $designPreferences = strip_tags(trim($_POST["design_preferences"]));
    $technicalRequirements = strip_tags(trim($_POST["technical_requirements"]));
    $budget = strip_tags(trim($_POST["budget"]));
    $timeline = strip_tags(trim($_POST["timeline"]));
    $additionalRequirements = strip_tags(trim($_POST["additional_requirements"]));

    $message = "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Project Type: $projectType\n";
    $message .= "Project Details: $projectDetails\n";
    $message .= "Project Goals: $projectGoals\n";
    $message .= "Target Audience: $targetAudience\n";
    $message .= "Design Preferences: $designPreferences\n";
    $message .= "Technical Requirements: $technicalRequirements\n";
    $message .= "Budget: $budget\n";
    $message .= "Timeline: $timeline\n";
    $message .= "Additional Requirements: $additionalRequirements";

    // To send HTML mail, the Content-type header must be set
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/plain; charset=UTF-8\r\n";
    $headers .= "From: noreply@yourdomain.com\r\n"; // Use a fixed email address
    $headers .= "Reply-To: $email\r\n";

    // Send
    if (mail('anastasiaivankoagency@gmail.com', 'New Project Brief Submission', $message, $headers)) {
        // Redirect to a thank-you page
        header('Location: thank-you.html');
        exit;
    } else {
        echo "There was an error sending the message.";
    }
} else {
    // Redirect to the form page or display an error
    header('Location: error.html');
    exit;
}
?>