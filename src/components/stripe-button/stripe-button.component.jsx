import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const publishableKey =
    'pk_test_51JDQLNR0lrbpahGIVSPlcmfd75rBEb8gGnbULt6n3o3cNLuAuqBzsADSMOgMDD4gtuI4drYIAZ3SBXyBU3BvVK7A00C7EyNwq3'
  const stripePrice = price * 100 // Converts value to cent

  const onToken = token => {
    alert('Payment successful')
    console.log(token)
  }

  return (
    <StripeCheckout
      name='Jobizil Stores'
      label='Pay Now'
      description={`Your total is $${price}`}
      shippingAddress
      billingAddress
      image='https://svgshare.com/i/CUz.svg'
      bitcoin={true}
      token={onToken}
      amount={stripePrice}
      panelLabel='Pay Now'
      stripeKey={publishableKey}
    />
  )
}
export default StripeCheckoutButton
