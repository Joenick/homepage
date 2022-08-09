import { Features, Download, SectionWrapper} from "./components";
import assets from './assets';
import styles from './styles/Global';
const App = () => {
  return (
    <>
      <SectionWrapper 
        title ="First React App nku kuys hahaha sample"
        description="Buy, store, dsfsdf sdfsdfsdfsdf sdfsdfsdf collect NFTczxcxzcxzc vxvcxcvcvcx svdfdsf"
        showBtn
        mockupImg={assets.homeHero}
        banner ="banner"
        />
        <SectionWrapper 
        title ="Smart User Interface Marketplace"
        description="Experience a buttery UI of pro Nef NFT Marketpalce.ct NFTczxcxzcxzc vxvcxcvcvcx svdfdsf"
        mockupImg={assets.homeCards}
        reverse
        />
        <Features /> 
        <SectionWrapper 
        title ="Deployment"
        description="ProNef is build using Expo which runs natively on all users devices"
        mockupImg={assets.feature}
        reverse
        />
        <SectionWrapper 
        title ="Creative way to showcase the store"
        description="zfsdfsdfsdfsdfsdfsdfsdf vsdfsdfsdf sdfsdfsdf
        sdfsdfsdfsd
        sdfsdfExperience a buttery UI of pro Nef NFT Marketpalce.ct NFTczxcxzcxzc vxvcxcvcvcx svdfdsf"
        mockupImg={assets.mockup}
        banner="banner02"
        />
        <Download />
        <div className="px-4 py-2 justify-center items-center bg-primary flex-col
        text-center banner04"> 
          <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with love by {" "}
          <span className="bold">Javascript mastery</span></p>
        </div>
    </>
   
  );
}

export default App;
