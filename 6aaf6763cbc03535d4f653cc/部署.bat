@echo off
chcp 65001 >nul
echo ============================================
echo        排班表 - 一键部署到 Surge
echo ============================================
echo.
echo 即将部署你的排班表到互联网...
echo 部署完成后你会得到一个网址，手机可以直接访问。
echo.
echo 注意：首次使用会提示你输入邮箱和密码来创建账号。
echo       请记住你设置的密码，以后更新需要用。
echo.
pause

cd /d "C:\Users\lyw\AppData\Roaming\TRAE SOLO CN\ModularData\ai-agent\work-mode-projects\6aaf6763cbc03535d4f653cc"

call "C:\Users\lyw\AppData\Roaming\TRAE SOLO CN\ModularData\ai-agent\vm\tools\node\surge.cmd" ./ paiban-app.surge.sh

echo.
echo ============================================
echo  部署完成！请把上面显示的网址发到手机上打开。
echo ============================================
echo.
pause
