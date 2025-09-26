#include <windows.h>
#include <string>

void setClipboardText(const std::wstring& text) {
    const size_t sizeInBytes = (text.length() + 1) * sizeof(wchar_t);
    HGLOBAL hMem = GlobalAlloc(GMEM_MOVEABLE, sizeInBytes);
    memcpy(GlobalLock(hMem), text.c_str(), sizeInBytes);
    GlobalUnlock(hMem);
    OpenClipboard(0);
    EmptyClipboard();
    SetClipboardData(CF_UNICODETEXT, hMem);
    CloseClipboard();
}

void pressCtrlVandEnter() {
    // Ctrl + V
    keybd_event(VK_CONTROL, 0, 0, 0);
    keybd_event(0x56, 0, 0, 0);  // 'V'
    keybd_event(0x56, 0, KEYEVENTF_KEYUP, 0);
    keybd_event(VK_CONTROL, 0, KEYEVENTF_KEYUP, 0);
    Sleep(50);
    // Enter
    keybd_event(VK_RETURN, 0, 0, 0);
    keybd_event(VK_RETURN, 0, KEYEVENTF_KEYUP, 0);
}

int main() {
    Sleep(5000); // 5 seconds to switch to WhatsApp Web

    std::wstring message = L" hey";

    for (int i = 0; i < 100; ++i) {
        setClipboardText(message);
        Sleep(50);
        pressCtrlVandEnter();
        Sleep(100);
    }

    return 0;
}
