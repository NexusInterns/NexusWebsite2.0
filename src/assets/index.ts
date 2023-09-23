import homeIcon from './icons/home.svg';
import coursesIcon from './icons/courses.svg';
import aboutIcon from './icons/about.svg';
import faqsIcon from './icons/faqs.svg';
import termsIcon from './icons/terms.svg';
import logoIcon from './icons/terms.svg';


const icons = [ homeIcon, coursesIcon, aboutIcon, faqsIcon, termsIcon, logoIcon];


export default {
    icons,

    homeIcon,
    coursesIcon,
    aboutIcon,
    faqsIcon,
    termsIcon,
    logoIcon,
}



import { Course } from '../components/index.tsx';
const coursesList = [
    new Course("Cisco Certified Network Associate CCNA 200-301", "CCNA200-301", "Cisco certification is the edge you need to jump-start your IT career", "FREE for Out-of-School Youth", 5),
    new Course("Windows Server Administration", "WSA", "You will learn how to automate manual server administration tasks using powershell", "FREE for Out-of-School Youth", 1),
    new Course("AWS Certified Cloud Practitioner", "AWSCCP", "This is the first step in achieving AWS Cloud certification", "FREE for Out-of-School Youth", 1),
    new Course("Azure Fundamentals", "AZUREFUN", "This is the first step in achieving Azure Cloud certification", "FREE for Out-of-School Youth", 1),
    new Course("Azure Administrator Associate (AZ-104)", "AZ-104", "You will learn how to administer Azure VM, Storage, Network, Databases and more in the Cloud using Azure", "FREE for Out-of-School Youth", 4),
    new Course("AWS Solutions Architect Associate (SAA-C02)", "SAA-C02", "You will learn how to administer AWS Instances, Storage, Network, Databases and more in the Cloud using AWS", "FREE for Out-of-School Youth", 4),
    new Course("Mastering VMware vSphere 6.7 Install, Configure & Manage Data Center Virtualization", "VMWARE", "You will learn how to Install, Configure & Manage Virtual Data Center", "FREE for Out-of-School Youth", 4)
];

export {coursesList}