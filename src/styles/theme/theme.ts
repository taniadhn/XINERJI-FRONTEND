export interface Theme {
  name: string;
  properties: any;
}

export const primaryTheme: Theme = {
  name: 'primaryTheme',
  properties: {
    '--foreground-default': '#08090A',
    '--foreground-secondary': '#41474D',
    '--foreground-tertiary': '#000',
    '--foreground-quaternary': '#000',
    '--foreground-light': '#41474D',

    '--background-default': '#F4FAFF',
    '--background-secondary': '#A3B9CC',
    '--background-tertiary': '#fff',
    '--background-light': '#FFFFFF',

    '--primary-default': '#5DFDCB',
    '--primary-dark': '#24B286',
    '--primary-light': '#B2FFE7',

    '--error-default': '#EF3E36',
    '--error-dark': '#800600',
    '--error-light': '#FFCECC',

    '--background-tertiary-shadow': '0 1px 3px 0 rgba(92, 125, 153, 0.5)'
  }
};

export const secondaryTheme: Theme = {
  name: 'secondaryTheme',
  properties: {
    '--foreground-default': '#5C7D99',
    '--foreground-secondary': '#A3B9CC',
    '--foreground-tertiary': '#F4FAFF',
    '--foreground-quaternary': '#ffff',
    '--foreground-light': '#FFFFFF',

    '--background-default': '#797C80',
    '--background-secondary': '#41474D',
    '--background-tertiary': '#242222',
    '--background-light': '#41474D',

    '--primary-default': '#5DFDCB',
    '--primary-dark': '#24B286',
    '--primary-light': '#B2FFE7',

    '--error-default': '#EF3E36',
    '--error-dark': '#800600',
    '--error-light': '#FFCECC',

    '--background-tertiary-shadow': '0 1px 3px 0 rgba(8, 9, 10, 0.5)'
  }
};
