import { Page } from "playwright";
import { MaterialBasePage } from "./material-base-page";

export class RegisterPage extends MaterialBasePage {
  xpathUsername = "//input[@id='username']";
  xpathEmail = "//input[@id='email']";
  getXpathGender = (gender: string) => `//input[@id='${gender}']`;
  getXpathHobbies = (hobby: string) => `//input[@id='${hobby}']`;
  xpathInterests = "//select[@id='interests']";
  xpathCountry = "//select[@id='country']";
  xpathDOB = "//input[@id='dob']";
  xpathProfilePicture = "//input[@id='profile']";
  xpathBio = "//textarea[@id='bio']";
  xpathRating = "//input[@id='rating']";
  xpathFavoriteColor = "//input[@id='favcolor']";
  xpathTextHover = "//div[contains(text(),'Hover over me')]";
  xpathNewsletter = "//input[@id = 'newsletter']";
  xpathButtonRegister = "//button[text()='Register']";

  // table data
  getXpathCell = (rowNumber: number, columnName: string) =>
    `//tbody/tr[${rowNumber}]/td[count(//thead//th[text()='${columnName}']/preceding-sibling::th)+1]`;

  constructor(page: Page, url: string) {
    super(page, url);
  }

  // fill username
  async fillUsername(username: string): Promise<void> {
    await this.page.locator(this.xpathUsername).fill(username);
  }

  // fill email
  async fillEmail(email: string): Promise<void> {
    await this.page.locator(this.xpathEmail).fill(email);
  }

  // Click choose gender
  async clickGender(gender: string): Promise<void> {
    await this.page.locator(this.getXpathGender(gender)).click();
  }

  // Click choose one or more hobbies
  async clickHobbies(hobbies: string[]): Promise<void> {
    for (const hobby of hobbies) {
      await this.page.locator(this.getXpathHobbies(hobby)).click();
    }
  }

  // Select interests
  async selectInterests(interest: string): Promise<void> {
    await this.page.locator(this.xpathInterests).selectOption(interest);
  }

  // Select country
  async selectCountry(country: string): Promise<void> {
    await this.page.locator(this.xpathCountry).selectOption(country);
  }

  // Input Date Of Birth
  async inputDOB(dob: string): Promise<void> {
    await this.page.locator(this.xpathDOB).fill(dob);
  }

  // Set input profile picture
  async setProfilePicture(pathFile: string): Promise<void> {
    await this.page.locator(this.xpathProfilePicture).setInputFiles(pathFile);
  }

  // input data Bio
  async inputBio(bio: string): Promise<void> {
    await this.page.locator(this.xpathBio).fill(bio);
  }

  // input rate
  async inputRate(rate: string): Promise<void> {
    await this.page.locator(this.xpathRating).fill(rate);
  }

  // choose favorite color
  async chooseFavColor(colorHex: string): Promise<void> {
    await this.page.locator(this.xpathFavoriteColor).fill(colorHex);
  }

  // Hover to element "Hover over me Subscribe"
  async hoverSubscribe(): Promise<void> {
    await this.page.locator(this.xpathTextHover).hover();
  }

  // Click checkbox Newsletter
  async clickNewsletter(): Promise<void> {
    await this.page.locator(this.xpathNewsletter).click();
  }

  // click button register
  async clickButtonRegister(): Promise<void> {
    await this.page.locator(this.xpathButtonRegister).click();
  }

  // get content of cell in table data
  async getCellData(
    rowNumber: number,
    columnName: string
  ): Promise<string | null> {
    return this.page
      .locator(this.getXpathCell(rowNumber, columnName))
      .textContent();
  }
}
