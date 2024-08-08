import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React, { PropsWithChildren } from 'react'

type SearchPanelTableProps = {
  searchInputPlaceholder: string
  searchInputValue: string
  searchInputOnChange: React.ChangeEventHandler<HTMLInputElement>
  SearchInputButton?: React.JSX.Element
  onSubmit?: React.FormEventHandler<HTMLFormElement>
  errorMessage: string
  dataCy?: string
}

export const SearchPanelTable = ({
  searchInputPlaceholder,
  searchInputValue,
  searchInputOnChange,
  SearchInputButton,
  onSubmit = event => {
    event.preventDefault()
  },
  errorMessage,
  children,
  dataCy
}: PropsWithChildren<SearchPanelTableProps>) => {
  return (
    <div className="flex flex-col gap-3">
      <div
        className="sm:shadow-search-panel h-[calc(100vh_-_190px)] overflow-hidden rounded border border-gray-dark bg-black/30 sm:h-[400px]"
        data-cy={dataCy}
      >
        {children}
      </div>
    </div>
  )
}
