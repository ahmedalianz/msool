// import the original type declarations
import 'i18next';

declare module 'i18next' {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    // custom resources type
    returnNull: false;
    returnEmptyString: false;

    // other
  }
}
