import { newE2EPage } from '@stencil/core/testing';

describe('app-chapter-content', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-chapter-content></app-chapter-content>');

    const element = await page.find('app-chapter-content');
    expect(element).toHaveClass('hydrated');
  });
});
