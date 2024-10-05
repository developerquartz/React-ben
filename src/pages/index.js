import ChangePassowrd from "./Others/ChangePassowrd";
import Dashboard from "./SidetabPages/Dashboard/Dashboard";
import EditProfile from "./Others/EditProfile";
import ForgetPassword from "./AccountsPage/ForgetPassword";
import Login from "./AccountsPage/Login";
import AuthLayout from "../layout/authLayout";
import Customer from "./SidetabPages/Customer/Customer";
import AddCustomer from "./SidetabPages/Customer/AddCustomer";
import CustomerProfile from "./SidetabPages/Customer/CustomerProfile";
import EditAddress from "./SidetabPages/Customer/EditAddress";
import ServiceProvider from "./SidetabPages/ServiceProvider/ServiceProvider";
import AddServiceProvider from "./SidetabPages/ServiceProvider/AddServiceProvider";
import ServiceProviderProfile from "./SidetabPages/ServiceProvider/ServiceProviderProfile";
import Services from "./SidetabPages/Catalog/Services/Services";
import AddOn from "./SidetabPages/Catalog/AddOn/AddOn";
import EditAddOn from "./SidetabPages/Catalog/AddOn/EditAddOn";
import AddService from "./SidetabPages/Catalog/Services/AddService";
import Booking from "./SidetabPages/Booking/Booking";
import BookingDetailView from "./SidetabPages/Booking/BookingDetail";
import BirdEyeView from "./SidetabPages/BirdEyeView/BirdEyeView";
import PromoCodes from "./SidetabPages/PromoCodes/PromoCodes";
import PromoCodeAdd from "./SidetabPages/PromoCodes/PromoCodeAdd";
import Offers from "./SidetabPages/Offers/Offers";
import AddOffer from "./SidetabPages/Offers/AddOffer";
import OrderReport from "./SidetabPages/Reports/Orders/OrderReport";
import CustomerReport from "./SidetabPages/Reports/Customers/CustomerReport";
import AdminTransaction from "./SidetabPages/Transaction/AdminTransaction/AdminTransaction";
import WithdrawalTransaction from "./SidetabPages/Transaction/WithdrawalTransaction/WithdrawalTransaction";
import SystemAccess from "./SidetabPages/SystemAccess/SystemAccess";
import AddUser from "./SidetabPages/SystemAccess/AddUser";
import FAQ from "./SidetabPages/Configuration/FAQs/FAQ";
import ContentPage from "./SidetabPages/Configuration/ContentPage/ContentPage";
import AddFaq from "./SidetabPages/Configuration/FAQs/AddFaq";
import EditContentPage from "./SidetabPages/Configuration/ContentPage/EditContentPage";
import Dispute from "./SidetabPages/Dispute/Dispute";
import SingleDispute from "./SidetabPages/Dispute/SingleDispute";
import BasicSetting from "./SidetabPages/Configuration/BasicSetting/BasicSetting";
import InstallationSetting from "./SidetabPages/Configuration/InstallationSetting/InstallationSetting";
import MailTemplate from "./SidetabPages/Configuration/MailTemplate/MailTemplate";
import SMSTemplate from "./SidetabPages/Configuration/SMSTemplate/SMSTemplate";
import AddVehicleMake from "./SidetabPages/Catalog/VehicleMake/AddVehicleMake";
import VehicleMakes from "./SidetabPages/Catalog/VehicleMake/VehicleMakes";
import AddVehicleModel from "./SidetabPages/Catalog/VehicleModel/AddVehicleModel";
import VehicleModels from "./SidetabPages/Catalog/VehicleModel/VehicleModels";
import ServiceDetailView from "./SidetabPages/ServiceProvider/ServiceDetailView";
import Documents from "./SidetabPages/Documents/Documents";
import LandingHome from "./landingPages/landingHome";
import LandingContact from "./landingPages/landingContact";
import LandingAbout from "./landingPages/landingAbout";
import LandingServices from "./landingPages/services";
import CreatePass from "../components/AccountsForm/CreatePass/createPass";
import SetPass from "../components/AccountsForm/SetPass/setPassword";
import EditAddressIndex from "../components/SidetabPages/Dashboard/EditAddressIndex";
import ViewAddressIndex from "../components/SidetabPages/Dashboard/ViewAddressIndex";
import { FacebookLanding } from "../components/landingPage/InstaFb/FacebookLanding/FacebookLanding";
import { InstagramLanding } from "../components/landingPage/InstaFb/InstaLanding/InstagramLanding";
import { YouTubeLanding } from "../components/landingPage/InstaFb/YoutubeLanding/YouTubeLanding";
import { TwitterLanding } from "../components/landingPage/InstaFb/TwitterLanding/TwitterLanding";
import { TikTokLanding } from "../components/landingPage/InstaFb/TikTokLanding/TikTokLanding";

const authRoutes = [
  {
    path: "/client/login",
    component: <Login />,
  },
  {
    path: "/client/forgetpassword",
    component: <ForgetPassword />,
  },
  {
    path: "/client/create-password",
    component: <CreatePass />,
  },
  {
    path: "/client/set-password",
    component: <SetPass />,
  },
  {
    path: "/",
    component: <LandingHome />,
  },
  {
    path: "/contact",
    component: <LandingContact />,
  },
  {
    path: "/facebook-signin",
    component: <FacebookLanding />,
  },
  {
    path: "/insta-signin",
    component: <InstagramLanding />,
  },
  {
    path: "/youtube-signin",
    component: <YouTubeLanding />,
  },
  {
    path: "/twitter-signin",
    component: <TwitterLanding />,
  },
  {
    path: "/tiktok-signin",
    component: <TikTokLanding />,
  },
  {
    path: "/about",
    component: <LandingAbout />,
  },
  {
    path: "/landing-service",
    component: <LandingServices />,
  },
];
const routes = [
  {
    path: "/client/documents",
    component: (
      <AuthLayout>
        <Dashboard />
      </AuthLayout>
    ),
  },
  {
    path: "/client/document/upload/:docId",
    component: (
      <AuthLayout>
        <EditAddressIndex />
      </AuthLayout>
    ),
  },
  {
    path: "/client/document/view/:docId",
    component: (
      <AuthLayout>
        <ViewAddressIndex />
      </AuthLayout>
    ),
  },
  {
    path: "/client/edit-profile",
    component: (
      <AuthLayout>
        <EditProfile />
      </AuthLayout>
    ),
  },
  {
    path: "/change-password",
    component: (
      <AuthLayout>
        <ChangePassowrd />
      </AuthLayout>
    ),
  },
  // {
  //   path: "/customers",
  //   component: (
  //     <AuthLayout>
  //       <Customer />
  //     </AuthLayout>
  //   ),
  // },
  // {
  //   path: "/customers/add",
  //   component: (
  //     <AuthLayout>
  //       <AddCustomer />
  //     </AuthLayout>
  //   ),
  // },
  // {
  //   path: "/customers/edit/:editId",
  //   component: (
  //     <AuthLayout>
  //       <AddCustomer />
  //     </AuthLayout>
  //   ),
  // },
  // {
  //   path: "/customers/profile/:editId",
  //   component: (
  //     <AuthLayout>
  //       <CustomerProfile />
  //     </AuthLayout>
  //   ),
  // },
  // {
  //   path: "/customers/address/edit/:_id",
  //   component: (
  //     <AuthLayout>
  //       <EditAddress />
  //     </AuthLayout>
  //   ),
  // },
  {
    path: "/templates",
    component: (
      <AuthLayout>
        <ServiceProvider />
      </AuthLayout>
    ),
  },
  {
    path: "/documents",
    component: (
      <AuthLayout>
        <Documents />
      </AuthLayout>
    ),
  },
  {
    path: "/service-provider/add",
    component: (
      <AuthLayout>
        <AddServiceProvider />
      </AuthLayout>
    ),
  },
  {
    path: "/service-provider/edit/:editId",
    component: (
      <AuthLayout>
        <AddServiceProvider />
      </AuthLayout>
    ),
  },
  {
    path: "/service-provider/profile/:editId",
    component: (
      <AuthLayout>
        <ServiceProviderProfile />
      </AuthLayout>
    ),
  },
  {
    path: "/service-provider/service/:_id",
    component: (
      <AuthLayout>
        <ServiceDetailView />
      </AuthLayout>
    ),
  },
  {
    path: "/email-templates",
    component: (
      <AuthLayout>
        <Services />
      </AuthLayout>
    ),
  },
  {
    path: "/document-templates",
    component: (
      <AuthLayout>
        <Services />
      </AuthLayout>
    ),
  },
  {
    path: "/basic-settings",
    component: (
      <AuthLayout>
        <Services />
      </AuthLayout>
    ),
  },
  {
    path: "/catalog/add-on",
    component: (
      <AuthLayout>
        <AddOn />
      </AuthLayout>
    ),
  },
  {
    path: "/catalog/add-on/add",
    component: (
      <AuthLayout>
        <EditAddOn />
      </AuthLayout>
    ),
  },
  {
    path: "/catalog/add-on/edit/:_id",
    component: (
      <AuthLayout>
        <EditAddOn />
      </AuthLayout>
    ),
  },
  {
    path: "/catalog/services/add",
    component: (
      <AuthLayout>
        <AddService />
      </AuthLayout>
    ),
  },
  {
    path: "/catalog/services/edit/:_id",
    component: (
      <AuthLayout>
        <AddService />
      </AuthLayout>
    ),
  },
  {
    path: "/catalog/vehicle-makes",
    component: (
      <AuthLayout>
        <VehicleMakes />
      </AuthLayout>
    ),
  },
  {
    path: "/catalog/vehicle-makes/add",
    component: (
      <AuthLayout>
        <AddVehicleMake />
      </AuthLayout>
    ),
  },
  {
    path: "/catalog/vehicle-makes/edit/:_id",
    component: (
      <AuthLayout>
        <AddVehicleMake />
      </AuthLayout>
    ),
  },
  {
    path: "/catalog/vehicle-models",
    component: (
      <AuthLayout>
        <VehicleModels />
      </AuthLayout>
    ),
  },
  {
    path: "/catalog/vehicle-models/add",
    component: (
      <AuthLayout>
        <AddVehicleModel />
      </AuthLayout>
    ),
  },
  {
    path: "/catalog/vehicle-models/edit/:editId",
    component: (
      <AuthLayout>
        <AddVehicleModel />
      </AuthLayout>
    ),
  },
  {
    path: "/bookings",
    component: (
      <AuthLayout>
        <Booking />
      </AuthLayout>
    ),
  },
  {
    path: "/bookings/booking-detail/:_id",
    component: (
      <AuthLayout>
        <BookingDetailView />
      </AuthLayout>
    ),
  },
  // {
  //   path: "/bird-eye-view",
  //   component: (
  //     <AuthLayout>
  //       <BirdEyeView />
  //     </AuthLayout>
  //   ),
  // },
  {
    path: "/promocodes",
    component: (
      <AuthLayout>
        <PromoCodes />
      </AuthLayout>
    ),
  },
  {
    path: "/promocodes/add",
    component: (
      <AuthLayout>
        <PromoCodeAdd />
      </AuthLayout>
    ),
  },
  {
    path: "/promocodes/edit/:editId",
    component: (
      <AuthLayout>
        <PromoCodeAdd />
      </AuthLayout>
    ),
  },
  {
    path: "/offers",
    component: (
      <AuthLayout>
        <Offers />
      </AuthLayout>
    ),
  },
  {
    path: "/offers/add",
    component: (
      <AuthLayout>
        <AddOffer />
      </AuthLayout>
    ),
  },
  {
    path: "/report/bookings",
    component: (
      <AuthLayout>
        <OrderReport />
      </AuthLayout>
    ),
  },
  {
    path: "/report/customers",
    component: (
      <AuthLayout>
        <CustomerReport />
      </AuthLayout>
    ),
  },
  {
    path: "/accounting/admin",
    component: (
      <AuthLayout>
        <AdminTransaction />
      </AuthLayout>
    ),
  },
  {
    path: "/accounting/withdrawal",
    component: (
      <AuthLayout>
        <WithdrawalTransaction />
      </AuthLayout>
    ),
  },
  {
    path: "/systemaccess",
    component: (
      <AuthLayout>
        <SystemAccess />
      </AuthLayout>
    ),
  },
  {
    path: "/systemaccess/adduser",
    component: (
      <AuthLayout>
        <AddUser />
      </AuthLayout>
    ),
  },
  {
    path: "/systemaccess/edituser/:editId",
    component: (
      <AuthLayout>
        <AddUser />
      </AuthLayout>
    ),
  },
  {
    path: "/configuration/faq",
    component: (
      <AuthLayout>
        <FAQ />
      </AuthLayout>
    ),
  },
  {
    path: "/configuration/faq/add",
    component: (
      <AuthLayout>
        <AddFaq />
      </AuthLayout>
    ),
  },
  {
    path: "/configuration/faq/edit/:editId",
    component: (
      <AuthLayout>
        <AddFaq />
      </AuthLayout>
    ),
  },
  {
    path: "/configuration/contentpage",
    component: (
      <AuthLayout>
        <ContentPage />
      </AuthLayout>
    ),
  },
  {
    path: "/configuration/contentpage/edit/:editId",
    component: (
      <AuthLayout>
        <EditContentPage />
      </AuthLayout>
    ),
  },
  {
    path: "/configuration/basic-setting",
    component: (
      <AuthLayout>
        <BasicSetting />
      </AuthLayout>
    ),
  },
  {
    path: "/configuration/installation-setting",
    component: (
      <AuthLayout>
        <InstallationSetting />
      </AuthLayout>
    ),
  },
  {
    path: "/configuration/smstemplate",
    component: (
      <AuthLayout>
        <SMSTemplate />
      </AuthLayout>
    ),
  },
  {
    path: "/configuration/mailtemplate",
    component: (
      <AuthLayout>
        <MailTemplate />
      </AuthLayout>
    ),
  },
  {
    path: "/dispute",
    component: (
      <AuthLayout>
        <Dispute />
      </AuthLayout>
    ),
  },
  {
    path: "/dispute/detail/:id",
    component: (
      <AuthLayout>
        <SingleDispute />
      </AuthLayout>
    ),
  },
];

export { routes, authRoutes };
