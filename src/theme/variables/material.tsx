import color from "color";

import { Platform, Dimensions, PixelRatio } from "react-native";

import commonColor from 'theme/variables/commonColor'

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const platform = Platform.OS;
const platformStyle = "material";

export default {
	platformStyle,
	platform,
	// AndroidRipple
	androidRipple: true,
	androidRippleColor: "rgba(256, 256, 256, 0.3)",
	androidRippleColorDark: "rgba(0, 0, 0, 0.15)",

	// Badge
	badgeBg: commonColor.badgeRed,
	badgeColor: commonColor.white,
	// New Variable
	badgePadding: platform === "ios" ? 3 : 0,

	// Button
	btnFontFamily: platform === "ios" ? "Roboto" : "Roboto_medium",
	btnDisabledBg: commonColor.gray,
	btnDisabledClr: commonColor.touchableUnderlay,

	// CheckBox
	CheckboxRadius: 0,
	CheckboxBorderWidth: 2,
	CheckboxPaddingLeft: 2,
	CheckboxPaddingBottom: platform === "ios" ? 0 : 5,
	CheckboxIconSize: platform === "ios" ? 18 : 14,
	CheckboxIconMarginTop: platform === "ios" ? undefined : 1,
	CheckboxFontSize: platform === "ios" ? 21 : 18,
	DefaultFontSize: 17,
	checkboxBgColor: commonColor.brandPrimary,
	checkboxSize: 20,
	checkboxTickColor: commonColor.white,

	// Segment
	segmentBackgroundColor: commonColor.brandPrimary,
	segmentActiveBackgroundColor: commonColor.white,
	segmentTextColor: commonColor.white,
	segmentActiveTextColor: commonColor.brandPrimary,
	segmentBorderColor: commonColor.white,
	segmentBorderColorMain: commonColor.brandPrimary,

	// New Variable
	get defaultTextColor() {
		return this.textColor;
	},

	get btnPrimaryBg() {
		return this.brandPrimary;
	},
	get btnPrimaryColor() {
		return this.inverseTextColor;
	},
	get btnInfoBg() {
		return this.brandInfo;
	},
	get btnInfoColor() {
		return this.inverseTextColor;
	},
	get btnSuccessBg() {
		return this.brandSuccess;
	},
	get btnSuccessColor() {
		return this.inverseTextColor;
	},
	get btnDangerBg() {
		return this.brandDanger;
	},
	get btnDangerColor() {
		return this.inverseTextColor;
	},
	get btnWarningBg() {
		return this.brandWarning;
	},
	get btnWarningColor() {
		return this.inverseTextColor;
	},
	get btnTextSize() {
		return platform === "ios" ? this.fontSizeBase * 1.1 : this.fontSizeBase - 1;
	},
	get btnTextSizeLarge() {
		return this.fontSizeBase * 1.5;
	},
	get btnTextSizeSmall() {
		return this.fontSizeBase * 0.8;
	},
	get borderRadiusLarge() {
		return this.fontSizeBase * 3.8;
	},

	buttonPadding: 6,

	get iconSizeLarge() {
		return this.iconFontSize * 1.5;
	},
	get iconSizeSmall() {
		return this.iconFontSize * 0.6;
	},

	// Card
	cardDefaultBg: commonColor.white,

	// Color
	brandPrimary: commonColor.brandPrimary,
	brandInfo: commonColor.brandInfo,
	brandSuccess: commonColor.brandSuccess,
	brandDanger: commonColor.brandDanger,
	brandWarning: commonColor.brandWarning,
	brandSidebar: commonColor.brandSidebar,

	// Font
	fontFamily: "Roboto",
	fontSizeBase: 15,

	get fontSizeH1() {
		return this.fontSizeBase * 1.8;
	},
	get fontSizeH2() {
		return this.fontSizeBase * 1.6;
	},
	get fontSizeH3() {
		return this.fontSizeBase * 1.4;
	},

	// Footer
	footerHeight: 55,
	footerDefaultBg: commonColor.brandPrimary,

	// FooterTab
	tabBarTextColor: commonColor.lightGray,
	tabBarTextSize: platform === "ios" ? 14 : 11,
	activeTab: commonColor.white,
	sTabBarActiveTextColor: commonColor.brandPrimary,
	tabBarActiveTextColor: commonColor.white,
	tabActiveBgColor: undefined,

	// Tab
	tabDefaultBg: commonColor.brandPrimary,
	topTabBarTextColor: commonColor.lightGray,
	topTabBarActiveTextColor: commonColor.white,
	topTabActiveBgColor: undefined,
	topTabBarBorderColor: commonColor.white,
	topTabBarActiveBorderColor: commonColor.white,

	// Header
	toolbarBtnColor: commonColor.white,
	toolbarDefaultBg: commonColor.brandPrimary,
	toolbarHeight: platform === "ios" ? 76 : 56,
	toolbarIconSize: platform === "ios" ? 20 : 22,
	toolbarSearchIconSize: platform === "ios" ? 20 : 23,
	toolbarInputColor: commonColor.white,
	searchBarHeight: platform === "ios" ? 30 : 40,
	toolbarInverseBg: commonColor.black,
	toolbarTextColor: commonColor.white,
	toolbarDefaultBorder: commonColor.brandPrimary,
	iosStatusbar: "light-content",
	get statusBarColor() {
		return color(this.toolbarDefaultBg)
			.darken(0.2)
			.hex();
	},

	// Icon
	iconFamily: "Ionicons",
	iconFontSize: platform === "ios" ? 30 : 28,
	iconMargin: 7,
	iconHeaderSize: platform === "ios" ? 29 : 24,

	// InputGroup
	inputFontSize: 17,
	inputBorderColor: commonColor.lightGray,
	inputSuccessBorderColor: commonColor.brandSuccess,
	inputErrorBorderColor: commonColor.brandWarning,

	get inputColor() {
		return this.textColor;
	},
	get inputColorPlaceholder() {
		return commonColor.darkGray;
	},

	inputGroupMarginBottom: 10,
	inputHeightBase: 50,
	inputPaddingLeft: 5,

	get inputPaddingLeftIcon() {
		return this.inputPaddingLeft * 8;
	},

	// Line Height
	btnLineHeight: 19,
	lineHeightH1: 32,
	lineHeightH2: 27,
	lineHeightH3: 22,
	iconLineHeight: platform === "ios" ? 37 : 30,
	lineHeight: platform === "ios" ? 20 : 24,

	// List
	listBorderColor: commonColor.lightGray,
	listDividerBg: commonColor.touchableUnderlay,
	listItemHeight: 45,
	listBtnUnderlayColor: commonColor.touchableUnderlay,

	// Card
	cardBorderColor: commonColor.tabActive,

	// Changed Variable
	listItemPadding: platform === "ios" ? 10 : 12,

	listNoteColor: commonColor.darkGray,
	listNoteSize: 13,

	// Progress Bar
	defaultProgressColor: commonColor.brandWarning,
	inverseProgressColor: commonColor.black,

	// Radio Button
	radioBtnSize: platform === "ios" ? 25 : 23,
	radioSelectedColorAndroid: commonColor.brandPrimary,

	// New Variable
	radioBtnLineHeight: platform === "ios" ? 29 : 24,

	radioColor: commonColor.gray,

	get radioSelectedColor() {
		return color(this.radioColor)
			.darken(0.2)
			.hex();
	},

	// Spinner
	defaultSpinnerColor: commonColor.brandSuccess,
	inverseSpinnerColor: commonColor.black,

	// Tabs
	tabBgColor: commonColor.touchableUnderlay,
	tabFontSize: 15,
	tabTextColor: commonColor.black,

	// Text
	textColor: commonColor.black,
	inverseTextColor: commonColor.white,
	noteFontSize: 14,

	// Title
	titleFontfamily: platform === "ios" ? "Roboto" : "Roboto_medium",
	titleFontSize: 19,
	subTitleFontSize: 14,
	subtitleColor: commonColor.white,

	// New Variable
	titleFontColor: commonColor.white,

	// Other
	borderRadiusBase: 2,
	borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
	contentPadding: 10,

	get darkenHeader() {
		return color(this.tabBgColor)
			.darken(0.03)
			.hex();
	},

	dropdownBg: commonColor.black,
	dropdownLinkColor: commonColor.darkGray,
	inputLineHeight: 24,
	jumbotronBg: commonColor.lightGray,
	jumbotronPadding: 30,
	deviceWidth,
	deviceHeight,

	// New Variable
	inputGroupRoundedBorderRadius: 30,
};
