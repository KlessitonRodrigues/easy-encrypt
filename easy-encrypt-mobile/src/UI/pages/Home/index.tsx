import SlideUp from 'src/UI/base/Animations/SlideUp';
import EncryptPanel from 'src/UI/components/EncryptPanel';
import PageContainer from 'src/UI/components/PageContainer';

const HomePage = () => {
  return (
    <PageContainer>
      <SlideUp>
        <EncryptPanel />
      </SlideUp>
    </PageContainer>
  );
};

export default HomePage;
