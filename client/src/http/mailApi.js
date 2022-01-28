import { $host} from "./index";


export  const sendMail = async (state)=>{
    try {
        console.log('mailSending');
        console.log(state)
        const {data} = await $host.post('api/mailer/', state,  {
            headers: {
                'Accept': 'application/jsons',
                'Content-Type': 'application/x-www-form-urlencoded'
            }});
        console.log('mailSend');
        console.log(data);
        return
    } catch (e) {

        console.log(e);
        return
    }

}

