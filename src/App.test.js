import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe ('Lever Link Click', () => {
  beforeAll(async () => {
    await page.goto("https://jobs.lever.co/altarum")
  });

  it('should click the first link on Lever', async() => {
    //click the first link
      await page.click('a.posting-title')

      await page.waitForTimeout(3000);  
  });
});
