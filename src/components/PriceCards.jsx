"use client"

function PriceCards({ prices }) {

  const clickCheckout = async (priceId) => {
    const res = await fetch("/api/checkout/", {
      method: "POST",
      body: JSON.stringify({ priceId }),
      headers: {
        "Content-Type": "application/json",
      }
    });

    const { url } = await res.json();
    console.log(url)

    window.location.href = url
  }

  return (
    <div className="flex gap-2">
      {
        prices.map(price => (
          <div key={price.id} className="w-full max-w-sm p-4 border rounded-lg shadow sm:p-8 border-gray-700">
            <h5 className="mb-4 text-xl font-medium">{price.nickname}</h5>
            <div className="flex items-baseline mb-7">
              <span className="text-3xl font-semibold">$</span>
              <span className="text-5xl font-extrabold">{price.unit_amount / 100}</span>
              <span className="ms-1 text-xl font-normal">/month</span>
            </div>
            <button onClick={() => clickCheckout(price.id)} className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
          </div>
        ))
      }
    </div>
  )
}

export default PriceCards