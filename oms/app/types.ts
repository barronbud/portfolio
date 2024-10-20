export interface Order {
    id: number;
    cartID: string;
    wineryID: string;
    orderNumber: string;
    orderDate: string;
    cartStatusID: string;
    cartPaymentTypeID: string;
    memberID: string;
    billFirstName: string;
    billLastName: string;
    billEmail: string;
    billPhone: string;
    billAddress: string;
    billCity: string;
    billState: string;
    billZipCode: string;
    billCountryID: string;
    shipFirstName: string;
    shipLastName: string;
    shipAddress: string;
    shipCity: string;
    shipState: string;
    shipZipCode: string;
    shipCountryID: string;
    subtotal: number;
    tax: number;
    shipping: number;
    total: number;
    creditCardTypeID: string;
    cardNumber: string;
    cardExpiryMo: string;
    cardExpiryYr: string;
    nameOnCard: string;
}