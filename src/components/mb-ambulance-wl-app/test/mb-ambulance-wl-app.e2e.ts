import { newE2EPage } from '@stencil/core/testing';

describe('mb-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mb-ambulance-wl-app></mb-ambulance-wl-app>');

    const element = await page.find('mb-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
