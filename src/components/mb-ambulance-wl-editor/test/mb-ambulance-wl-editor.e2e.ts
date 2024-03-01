import { newE2EPage } from '@stencil/core/testing';

describe('mb-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mb-ambulance-wl-editor></mb-ambulance-wl-editor>');

    const element = await page.find('mb-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
