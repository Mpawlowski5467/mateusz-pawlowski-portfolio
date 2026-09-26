import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import { App } from '../App'

afterEach(cleanup)

describe('App', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />)
    expect(container).toBeTruthy()
  })

  it('shows the current role and switches everything to Polish', () => {
    render(<App />)
    expect(screen.getByText('AI / Automation Associate')).toBeTruthy()
    expect(document.documentElement.lang).toBe('en')

    fireEvent.click(screen.getByRole('button', { name: 'Switch to Polish' }))

    expect(screen.getByText('Specjalista ds. AI i automatyzacji')).toBeTruthy()
    expect(screen.getByText('💼 Ścieżka zawodowa')).toBeTruthy()
    expect(document.documentElement.lang).toBe('pl')
  })

  it('shows a real last-updated date in the footer', () => {
    render(<App />)
    const footer = document.querySelector('footer')
    expect(footer.textContent).toMatch(/Last updated \w+ \d{1,2}, \d{4}/)
    expect(footer.textContent).not.toMatch(/Invalid Date/)
  })

  it('only shows a Live demo button for projects that have a demo link', () => {
    render(<App />)
    expect(screen.getAllByRole('link', { name: 'GitHub' }).length).toBeGreaterThan(0)
    expect(screen.queryByRole('link', { name: 'Live demo' })).toBeNull()
  })
})
