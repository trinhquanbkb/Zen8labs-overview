export interface MenuItemTypes {
  key: string;
  label: string;
  isTitle?: boolean;
  icon?: string;
  url?: string;
  actions?: string;
  badge?: {
    variant: string;
    text: string;
  };
  parentKey?: string;
  target?: string;
  children?: MenuItemTypes[];
}

const MENU_ITEMS: MenuItemTypes[] = [
  {
    key: "tracking-search",
    label: "Tra cứu Tracking",
    isTitle: false,
    icon: "search",
    url: "/tracking/search",
    actions: "api:: GET /api/trackings/find-from-warehouse",
  },
  {
    key: "tracking",
    label: "Tracking",
    isTitle: false,
    icon: "package",
    url: "/tracking",
    actions: "api:: GET /api/trackings",
  },
  {
    key: "order",
    label: "Đơn hàng",
    isTitle: false,
    icon: "file-text",
    url: "/order",
    actions: "api:: GET /api/orders",
  },
  {
    key: "awb",
    label: "MAWB",
    isTitle: false,
    icon: "truck",
    url: "/mawb",
    actions: "api:: GET /api/awbs/list",
  },
  {
    key: "deliveryslip",
    label: "Phiếu xuất kho",
    isTitle: false,
    icon: "file",
    url: "/deliveryslip",
    actions: "api:: GET /api/delivery_bills",
  },
  {
    key: "deliveryorder",
    label: "Vận đơn VN",
    isTitle: false,
    icon: "shopping-cart",
    url: "/deliveryorder",
    actions: "api:: GET /api/vn_delivery_orders",
  },
  {
    key: "customer",
    label: "Khách hàng",
    isTitle: false,
    icon: "user-plus",
    url: "/customer",
    actions: "api:: GET /api/customers",
  },
  {
    key: "transaction",
    label: "Giao dịch",
    isTitle: false,
    icon: "dollar-sign",
    url: "/transaction",
    actions: "api:: GET /api/transactions",
  },
  {
    key: "report",
    label: "Báo cáo",
    isTitle: false,
    icon: "activity",
    badge: { variant: "success", text: "02" },
    url: "/report/revenue/warehouse",
    actions: "api:: GET /api/report/revenue/warehouse",
    children: [
      {
        key: "revenue",
        label: "Thống kê doanh thu",
        url: "/report/revenue/warehouse",
        parentKey: "report",
        actions: "api:: GET /api/report/revenue/warehouse",
      },
      {
        key: "mining",
        label: "Thống kê khai thác",
        url: "/report/mining",
        parentKey: "report",
        actions: "api:: GET /api/report/exploitation",
      },
    ],
  },
  {
    key: "employee",
    label: "Nhân viên",
    isTitle: false,
    icon: "user",
    url: "/employee",
    actions: "api:: GET /api/employees",
  },
  {
    key: "page-config",
    label: "Trang CMS",
    isTitle: false,
    icon: "layers",
    url: "/page-config/home",
    actions: "api:: PUT /api/pages/:id",
    children: [
      {
        key: "home",
        label: "Cấu hình CMS",
        url: "/page-config",
        parentKey: "page-config",
        actions: "api:: PUT /api/pages/:id",
      },
      {
        key: "news",
        label: "Tin tức",
        url: "/page-config/news",
        parentKey: "page-config",
        actions: "api:: PUT /api/pages/:id",
      },
    ],
  },
  {
    key: "setting",
    label: "Cấu hình",
    isTitle: false,
    icon: "settings",
    url: "/settings",
    badge: { variant: "success", text: "02" },
    actions: "api:: POST /api/general_configs",
    children: [
      {
        key: "box",
        label: "Cấu hình hệ số thùng",
        url: "/settings/box-coefficient",
        parentKey: "setting",
        actions: "api:: GET /api/general_configs/box-coefficient-config",
      },
      {
        key: "price",
        label: "Cấu hình bảng giá",
        url: "/settings/price",
        parentKey: "setting",
        actions: "api:: POST /api/general_configs",
      },
      {
        key: "role",
        label: "Phân quyền người dùng",
        url: "/settings/role",
        parentKey: "setting",
        actions: "api:: POST /api/general_configs",
      },
      {
        key: "bank",
        label: "Tài khoản ngân hàng",
        url: "/settings/bank-accounts",
        parentKey: "setting",
        actions: "api:: POST /api/general_configs",
      },
      {
        key: "unit",
        label: "Đối tác vận chuyển",
        url: "/settings/delivery-units",
        parentKey: "setting",
        actions: "api:: POST /api/general_configs",
      },
      {
        key: "mail",
        label: "Cấu hình mail server",
        url: "/settings/mail-server",
        parentKey: "setting",
        actions: "api:: POST /api/general_configs",
      },
      {
        key: "contact",
        label: "Cấu hình chung",
        url: "/settings/contact-information",
        parentKey: "setting",
        actions: "api:: POST /api/general_configs",
      },
      {
        key: "code-prefix",
        label: "Cấu hình tiền tố",
        url: "/settings/code-prefix",
        parentKey: "setting",
        actions: "api:: POST /api/general_configs",
      },
    ],
  },
];

// get the profilemenu
export const ProfileMenus = [
  {
    label: "My Account",
    icon: "user",
    redirectTo: "/user-infor",
  },
  {
    label: "Recharge",
    icon: "dollar-sign",
    redirectTo: "/payment-gateway",
  },
  {
    label: "Logout",
    icon: "log-out",
    redirectTo: "/auth/login",
  },
];

const HORIZONTAL_MENU_ITEMS: MenuItemTypes[] = MENU_ITEMS;
const TWO_COl_MENU_ITEMS: MenuItemTypes[] = MENU_ITEMS;

export { MENU_ITEMS, TWO_COl_MENU_ITEMS, HORIZONTAL_MENU_ITEMS };
