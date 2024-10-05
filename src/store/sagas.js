import { all, fork } from "redux-saga/effects";

//public
import LoginSaga from "./Login/saga";
import UserSaga from "./User/saga";
import fileUpload from "./Upload Image/saga";
import ExportUserSaga from "./ExportUser/saga";
import ServiceProviderSaga from "./ServiceProvider/saga";
import ExportServiceProviderSaga from "./ExportServiceProvider/saga";
import FaqSaga from "./Faq/saga";
import ContentpageSaga from "./ContentPage/saga";
import PromoCodeSaga from "./PromoCodes/saga";
import SystemAdminSaga from "./SystemAdmin/saga";
import SettingSaga from "./Settings/saga";
import CatalogSaga from "./Catalog/saga";
import DashboardSaga from "./Dashboard/saga";
import ExportSaga from "./Export/saga";
import DisputeSaga from "./Dispute/saga";
import ProfileSaga from "./Listing/saga";

export default function* rootSaga() {
  yield all([fork(LoginSaga)]);
  yield all([fork(UserSaga)]);
  yield all([fork(fileUpload)]);
  yield all([fork(ExportUserSaga)]);
  yield all([fork(ServiceProviderSaga)]);
  yield all([fork(ExportServiceProviderSaga)]);
  yield all([fork(FaqSaga)]);
  yield all([fork(ContentpageSaga)]);
  yield all([fork(PromoCodeSaga)]);
  yield all([fork(SystemAdminSaga)]);
  yield all([fork(SettingSaga)]);
  yield all([fork(CatalogSaga)]);
  yield all([fork(DashboardSaga)]);
  yield all([fork(ExportSaga)]);
  yield all([fork(DisputeSaga)]);
  yield all([fork(ProfileSaga)]);
}
