import { useFetcher } from 'react-router-dom'
import Button from '../../UI/Button'
import {updateOrder} from '../../services/apiRestaurant'

// eslint-disable-next-line react/prop-types
function UpdateOrder({order}) {
    const fetcher = useFetcher()

    return (
<fetcher.Form method='POST' className='text-right'>
        <Button type="primary">make priority</Button>
</fetcher.Form>
    )
}

export default UpdateOrder

// eslint-disable-next-line react-refresh/only-export-components
export async function action({request,params}){
const data ={priority : true};
await updateOrder(params.orderId , data)
return null

}