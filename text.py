import pyautogui
import time
import pyperclip

# Wait time to switch to WhatsApp chat
time.sleep(5)

# Message with emojis
message = "hey hey hey"

# Copy the message to clipboard
pyperclip.copy(message)

# Send 100 messages
for i in range(10):
    pyautogui.hotkey("ctrl", "v")  # Paste the message
    pyautogui.press("enter")       # Send it
    time.sleep(0.1)
