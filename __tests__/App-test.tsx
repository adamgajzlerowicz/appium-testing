import wd from 'wd';
// var path = require('path');
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
const PORT = 4723;
const config = {
  platformName: 'Android',
  appPackage: 'com.testingschool',
  appActivity: 'com.testingschool.MainActivity',
  deviceName: 'emulator-5554',
};

const driver = wd.promiseChainRemote('localhost', PORT);
beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(3000);
});

test('my first appium test', async () => {
  expect(await driver.hasElementByAccessibilityId('guzik')).toBe(true);
  const element = await driver.elementByAccessibilityId('guzik');
  await element.click();
  expect(await driver.hasElementByAccessibilityId('notHere')).toBe(false);
});
