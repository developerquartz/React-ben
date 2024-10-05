import { combineReducers } from "redux";
import LoginReducer from "./Login/reducer";
import UserReducer from "./User/reducer";
import UplaoadFileReducer from "./Upload Image/reducer";
import ExportUserReducer from "./ExportUser/reducer";
import ServiceProviderReducer from "./ServiceProvider/reducer";
import ExportServiceProviderReducer from "./ExportServiceProvider/reducer";
import FaqReducer from "./Faq/reducer";
import ContentPageReducer from "./ContentPage/reducer";
import PromoReducer from "./PromoCodes/reducer";
import SystemAdminReducer from "./SystemAdmin/reducer";
import SettingReducer from "./Settings/reducer";
import CatalogReducer from "./Catalog/reducer";
import DashboardReducer from "./Dashboard/reducer";
import ExportReducer from "./Export/reducer";
import DisputeReducer from "./Dispute/reducer";
import ProfileReducer from "./Listing/reducer";

const rootReducer = combineReducers({
  login: LoginReducer,
  Customers: UserReducer,
  fileUpload: UplaoadFileReducer,
  ExportUser: ExportUserReducer,
  ServiceProvider: ServiceProviderReducer,
  ExportServiceProvider: ExportServiceProviderReducer,
  FaqReducer: FaqReducer,
  ContentPageReducer: ContentPageReducer,
  PromoReducer: PromoReducer,
  SystemAdmin: SystemAdminReducer,
  Setting: SettingReducer,
  Catalog: CatalogReducer,
  Dashboard: DashboardReducer,
  Export: ExportReducer,
  Dispute: DisputeReducer,
  Profile: ProfileReducer,
});

export default rootReducer;
