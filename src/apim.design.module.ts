import { UnsavedChangesRouteGuard } from "./routing/unsavedChangesRouteGuard";
import { MapiObjectStorage } from "./persistence/mapiObjectStorage";
import { DefaultAuthenticator } from "./components/defaultAuthenticator";
import { AccessTokenRouteGuard } from "./routing/accessTokenRouteGuard";
import { IInjector, IInjectorModule } from "@paperbits/common/injection";
import { ListOfApisModule } from "./components/apis/list-of-apis/ko/listOfApis.module";
import { ListOfApisEditorModule } from "./components/apis/list-of-apis/ko/listOfApisEditor.module";
import { DetailsOfApiModule } from "./components/apis/details-of-api/ko/detailsOfApi.module";
import { DetailsOfApiEditorModule } from "./components/apis/details-of-api/ko/detailsOfApiEditor.module";
import { HistoryOfApiModule } from "./components/apis/history-of-api/ko/historyOfApi.module";
import { HistoryOfApiEditorModule } from "./components/apis/history-of-api/ko/historyOfApiEditor.module";
import { UserSigninModule } from "./components/users/user-signin/ko/userSignin.module";
import { UserSigninEditorModule } from "./components/users/user-signin/ko/userSigninEditor.module";
import { UserSigninSocialModule } from "./components/users/user-signin-social/ko/userSigninSocial.module";
import { UserSigninSocialEditorModule } from "./components/users/user-signin-social/ko/userSigninSocialEditor.module";
import { UserSignupModule } from "./components/users/user-signup/ko/userSignup.module";
import { UserSignupEditorModule } from "./components/users/user-signup/ko/userSignupEditor.module";
import { UserDetailsModule } from "./components/users/user-details/ko/userDetails.module";
import { UserDetailsEditorModule } from "./components/users/user-details/ko/userDetailsEditor.module";
import { UserSubscriptionsModule } from "./components/users/user-subscriptions/ko/userSubscriptions.module";
import { UserSubscriptionsEditorModule } from "./components/users/user-subscriptions/ko/userSubscriptionsEditor.module";
import { ProductDetailsModule } from "./components/products/product-details/ko/productDetails.module";
import { ProductDetailsEditorModule } from "./components/products/product-details/ko/productDetailsEditor.module";
import { MapiClient, IdentityService } from "./services";
import { AzureBlobStorage } from "@paperbits/azure";
import { SetupModule } from "./components/setup/setup.module";
import { PublishingModule } from "./components/publishing";
import { SaveChangesToolButton } from "./persistence/saveChangesToolbutton";
import { OperationListModule } from "./components/operations/operation-list/ko/operationList.module";
import { OperationListEditorModule } from "./components/operations/operation-list/ko/operationListEditor.module";
import { OperationDetailsModule } from "./components/operations/operation-details/ko/operationDetails.module";
import { OperationDetailsEditorModule } from "./components/operations/operation-details/ko/operationDetailsEditor.module";
import { ProductListModule } from "./components/products/product-list/ko/productList.module";
import { ProductListEditorModule } from "./components/products/product-list/ko/productListEditor.module";
import { ProductSubscribeModule } from "./components/products/product-subscribe/ko/productSubscribe.module";
import { ProductSubscribeEditorModule } from "./components/products/product-subscribe/ko/productSubscribeEditor.module";
import { ProductApisModule } from "./components/products/product-apis/ko/productApis.module";
import { ProductApisEditorModule } from "./components/products/product-apis/ko/productApisEditor.module";
import { ProductSubscriptionsEditorModule } from "./components/products/product-subscriptions/ko/productSubscriptionsEditor.module";
import { ProductSubscriptionsModule } from "./components/products/product-subscriptions/ko/productSubscriptions.module";
import { App } from "./components/app/app";
import { ReportsModule } from "./components/reports/ko/reports.module";
import { ReportsEditorModule } from "./components/reports/ko/reportsEditor.module";
import { ResetPasswordModule } from "./components/users/reset-password/ko/resetPassword.module";
import { ResetPasswordEditorModule } from "./components/users/reset-password/ko/resetPasswordEditor.module";
import { ConfirmPasswordModule } from "./components/users/confirm-password/ko/confirmPassword.module";
import { ConfirmPasswordEditorModule } from "./components/users/confirm-password/ko/confirmPasswordEditor.module";
import { HelpModule } from "./components/help";
import { ChangePasswordModule } from "./components/users/change-password/ko/changePassword.module";
import { ChangePasswordEditorModule } from "./components/users/change-password/ko/changePasswordEditor.module";
import { TenantService } from "./services/tenantService";
import { ValidationSummaryModule } from "./components/users/validation-summary/ko/validationSummary.module";
import { ValidationSummaryEditorModule} from "./components/users/validation-summary/ko/validationSummaryEditor.module"
import { BackendService } from "./services/backendService";
import { StaticRoleService } from "./services/roleService";


export class ApimDesignModule implements IInjectorModule {
    public register(injector: IInjector): void {
        injector.bindModule(new SetupModule());
        injector.bindModule(new ListOfApisModule());
        injector.bindModule(new ListOfApisEditorModule());
        injector.bindModule(new DetailsOfApiModule());
        injector.bindModule(new DetailsOfApiEditorModule());
        injector.bindModule(new HistoryOfApiModule());
        injector.bindModule(new HistoryOfApiEditorModule());
        injector.bindModule(new UserSigninModule());
        injector.bindModule(new UserSigninEditorModule());
        injector.bindModule(new UserSigninSocialModule());
        injector.bindModule(new UserSigninSocialEditorModule());
        injector.bindModule(new UserSignupModule());
        injector.bindModule(new UserSignupEditorModule());
        injector.bindModule(new UserDetailsModule());
        injector.bindModule(new UserDetailsEditorModule());
        injector.bindModule(new UserSubscriptionsModule());
        injector.bindModule(new UserSubscriptionsEditorModule());
        injector.bindModule(new ProductListModule());
        injector.bindModule(new ProductListEditorModule());
        injector.bindModule(new ProductApisModule());
        injector.bindModule(new ProductApisEditorModule());
        injector.bindModule(new ProductSubscriptionsModule());
        injector.bindModule(new ProductSubscriptionsEditorModule());
        injector.bindModule(new ProductDetailsModule());
        injector.bindModule(new ProductDetailsEditorModule());
        injector.bindModule(new ProductSubscribeModule());
        injector.bindModule(new ProductSubscribeEditorModule());
        injector.bindModule(new PublishingModule());
        injector.bindModule(new OperationListModule());
        injector.bindModule(new OperationListEditorModule());
        injector.bindModule(new OperationDetailsModule());
        injector.bindModule(new OperationDetailsEditorModule());
        injector.bindModule(new ReportsModule());
        injector.bindModule(new ReportsEditorModule());
        injector.bindModule(new ResetPasswordModule());
        injector.bindModule(new ResetPasswordEditorModule());
        injector.bindModule(new ConfirmPasswordModule());
        injector.bindModule(new ConfirmPasswordEditorModule());
        injector.bindModule(new ChangePasswordModule());
        injector.bindModule(new ChangePasswordEditorModule());
        injector.bindModule(new HelpModule());
        injector.bindModule(new ValidationSummaryEditorModule());
        injector.bindModule(new ValidationSummaryModule());
        injector.bindSingleton("app", App);
        injector.bindSingleton("blobStorage", AzureBlobStorage);
        injector.bindSingleton("tenantService", TenantService);        
        injector.bindSingleton("backendService", BackendService);
        injector.bindSingleton("roleService", StaticRoleService);
        injector.bindSingleton("tenantService", TenantService);
        injector.bindSingleton("identityService", IdentityService);
        injector.bindSingleton("mapiClient", MapiClient);
        injector.bindSingleton("authenticator", DefaultAuthenticator);
        injector.bindSingleton("objectStorage", MapiObjectStorage);
        injector.bindToCollection("routeGuards", UnsavedChangesRouteGuard);
        injector.bindToCollection("routeGuards", AccessTokenRouteGuard);
        injector.bindToCollection("trayCommands", SaveChangesToolButton);
    }
}