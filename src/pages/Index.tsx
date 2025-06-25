import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Advantages from "@/components/Advantages";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Advantages />
      <ContactForm />
    </Layout>
  );
};

export default Index;
