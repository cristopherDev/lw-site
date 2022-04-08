import Layout from '../components/layout/Layout';
import MenuBar from '../components/menu_bar/MenuBar';
import MenuLogo from '../components/menu_sections/menu_logo/MenuLogo';
import MenuContainerOptions from '../components/menu_sections/menu_options/MenuContainerOptions';
import MenuOption from '../components/menu_sections/menu_options/MenuOption';
import Section from '../components/section/Section';

const Home = () => {
    return (
        <Layout>
            <MenuBar>
                <MenuLogo/>
                <MenuContainerOptions>
                    <MenuOption>option1</MenuOption>
                    <MenuOption>option2</MenuOption>
                    <MenuOption>option3</MenuOption>
                </MenuContainerOptions>
            </MenuBar>
            <Section>
                <p>Banner principal</p>
            </Section>
            <Section background={true}>
                <p>Section component</p>
            </Section>
        </Layout>
    )
}

export default Home;