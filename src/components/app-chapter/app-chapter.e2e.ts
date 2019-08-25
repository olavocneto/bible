import { newE2EPage } from '@stencil/core/testing';

describe('app-chapter', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-chapter></app-chapter>');

    const element = await page.find('app-chapter');
    expect(element).toHaveClass('hydrated');
  });
});
