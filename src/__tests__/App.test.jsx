import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import { App } from '../App'

afterEach(() => {
  cleanup()
  window.sessionStorage.clear()
})

describe('App', () => {
  it('renders the name as the page heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: 'Mateusz Pawłowski' })).toBeTruthy()
    expect(screen.getByText('Greater Chicago Area')).toBeTruthy()
  })

  it('lets visitors skip the terminal intro with a key press', () => {
    render(<App />)
    expect(screen.getByText('click or press any key to skip')).toBeTruthy()

    fireEvent.keyDown(window, { key: 'Enter' })

    expect(screen.queryByText('click or press any key to skip')).toBeNull()
  })

  it('shows the current role and switches everything to Polish', () => {
    render(<App />)
    expect(screen.getByText('AI / Automation Associate')).toBeTruthy()
    expect(document.documentElement.lang).toBe('en')

    fireEvent.click(screen.getByRole('button', { name: 'Switch to Polish' }))

    expect(screen.getByText('Specjalista ds. AI i automatyzacji')).toBeTruthy()
    expect(screen.getByText('Chicago i okolice')).toBeTruthy()
    expect(document.documentElement.lang).toBe('pl')
  })

  it('lists the current projects and not the old coursework ones', () => {
    render(<App />)
    for (const name of ['Loom', 'SportsDash', 'Argus']) {
      expect(screen.getByRole('heading', { name })).toBeTruthy()
    }
    expect(screen.queryByText(/Car Parts E-commerce/)).toBeNull()
    expect(screen.queryByText(/onboarding chatbot/)).toBeNull()
  })

  it('lists the projects built at Reyes under work, in both languages', () => {
    render(<App />)
    for (const name of ['AR Logistics Invoice Automation', 'Supplier POS Request Portal', 'Purchase Order Invoice Parser', 'Price Promotion Request Workflow']) {
      expect(screen.getByRole('heading', { name })).toBeTruthy()
    }

    fireEvent.click(screen.getByRole('button', { name: 'Switch to Polish' }))

    expect(screen.getByRole('heading', { name: 'Portal zamówień materiałów POS dla dostawców' })).toBeTruthy()
  })

  it('shows a real last-updated date in the footer', () => {
    render(<App />)
    const footer = document.querySelector('footer')
    expect(footer.textContent).toMatch(/last updated \w+ \d{1,2}, \d{4}/)
    expect(footer.textContent).not.toMatch(/Invalid Date/)
  })
})
