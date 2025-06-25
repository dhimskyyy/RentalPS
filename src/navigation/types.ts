export type BookingStackParamList = {
  Booking: undefined;
  BookingDetail: {
    item: {
      title: string;
      price: string;
      image: any;
      description: string;
      color?: string;
      extraImage?: any;
    };
  };
};