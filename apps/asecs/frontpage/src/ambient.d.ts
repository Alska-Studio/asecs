type KlarnaCheckoutApi = {
  suspend: (options?: {
    autoResume: {
      enabled: boolean;
    };
  }) => void;
  resume: () => void;
  on: (events: {
    [key in KlarnaCheckoutEvent]?: (data: any, callback?: (response: { should_proceed: boolean, message?: string }) => void) => void
  }) => void;
};

type KlarnaCheckoutEvent =
  | 'load'
  | 'user_interacted'
  | 'customer'
  | 'change'
  | 'billing_address_change'
  | 'shipping_address_change'
  | 'shipping_option_change'
  | 'shipping_address_update_error'
  | 'order_total_change'
  | 'checkbox_change'
  | 'can_not_complete_order'
  | 'network_error'
  | 'redirect_initiated'
  | 'load_confirmation'
  | 'validation_callback';

declare global {
  interface Window {
    _klarnaCheckout: (callback: (api: KlarnaCheckoutApi) => void) => void;
    lipscore?: {
      initWidgets?: () => void;
    };
  }
}

export {};
