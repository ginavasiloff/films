import { fireEvent, screen, render } from '@testing-library/react'

import { SearchForm } from './form'

describe('SearchForm', () => {
  it('it runs the passed-in function on submit', () => {
    const spy = vi.spyOn(console, 'log')
    render(SearchForm({ handleSearch: console.log }))

    const submit = screen.getByTestId('submit-button')
    screen.getByTestId('search-input').setAttribute('value', 'test')
    fireEvent.click(submit)

    expect(spy).toHaveBeenCalled()
  })
})
