'use client'
import { useForm, ValidationError } from '@formspree/react'

export default function ContactPage() {
  const [state, handleSubmit] = useForm('xdkzvbjb')

  if (state.succeeded) {
    return <p className="mt-8 text-center text-green-600">Thanks for your submission!</p>
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-2xl space-y-6 rounded bg-white p-8 shadow dark:bg-gray-900"
    >
      <div>
        <label htmlFor="name" className="mb-1 block font-medium text-gray-700 dark:text-gray-200">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="focus:ring-primary-500 w-full rounded border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:ring-2 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
        />
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
          className="mt-1 text-sm text-red-500"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block font-medium text-gray-700 dark:text-gray-200">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="focus:ring-primary-500 w-full rounded border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:ring-2 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="mt-1 text-sm text-red-500"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-1 block font-medium text-gray-700 dark:text-gray-200"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="focus:ring-primary-500 w-full rounded border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:ring-2 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="mt-1 text-sm text-red-500"
        />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="bg-primary-500 hover:bg-primary-600 w-full rounded px-4 py-2 font-semibold text-white transition-colors disabled:opacity-60"
      >
        Submit
      </button>
      <ValidationError errors={state.errors} className="mt-2 text-sm text-red-500" />
    </form>
  )
}
