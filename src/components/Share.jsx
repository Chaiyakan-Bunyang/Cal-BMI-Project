import { FacebookShareButton,} from "react-share";
import { FacebookMessengerIcon,} from "react-share";
import { LinkedinShareButton } from 'react-share';
import { AiFillLinkedin } from 'react-icons/ai';
import { FacebookProvider, ShareButton } from 'react-facebook';
export default function Share(props){
    const {imgUrl} =props

    return(
        <div>
    <FacebookProvider appId="3370247446559346">
      <ShareButton quote="Check out this image" href={"https://mellow-begonia-0eca77.netlify.app/"}>
        <FacebookMessengerIcon style={{ opacity: '0.5' }} size={18} />
      </ShareButton>
    </FacebookProvider>
        </div>
    );
}