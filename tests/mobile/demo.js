const { remote } = require('webdriverio');

(async () => {
  const driver = await remote({
    hostname: '127.0.0.1',
    port: 4723,
    path: '/',
    capabilities: {
      platformName: 'Android',
      'appium:automationName': 'UiAutomator2',
      'appium:deviceName': 'Android Emulator',
      'appium:app': 'D:\\qa-portfolio-project2\\apps\\ApiDemos-debug.apk'
    }
  });

  const appButton = await driver.$('//*[@text="App"]');
  await appButton.click();

  console.log('Successfully opened App menu');

  await driver.pause(3000);

  await driver.deleteSession();
})();