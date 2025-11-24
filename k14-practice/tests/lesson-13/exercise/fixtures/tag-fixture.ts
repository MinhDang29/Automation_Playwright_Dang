import { test as base, expect } from '@playwright/test';
import { TagsPage } from '../pages/tags-page';

const url: string = 'https://pw-practice-dev.playwrightvn.com/wp-admin';
const loginInfo = {
    user: 'k12-thong',
    password: '5IMDE642%4bw0X*p4282dPN$'

}

let myTagPage: TagsPage;
let tagNameList: string[] = [];

export const test = base.extend<{ myTags: TagsPage }>({
    myTags: async ({ page }, use) => {
        console.log('bắt đầu fixture');
        myTagPage = new TagsPage(page);

        await myTagPage.page.goto(url);

        await myTagPage.login(loginInfo.user, loginInfo.password);

        await myTagPage.clickPostMenu();
        await myTagPage.page.click(myTagPage.locatorPostMenu.tagSubMenu);

        await myTagPage.createNewTag('t1', 'fixture-t1');
        await expect(myTagPage.getXpathTagName('t1')).toBeVisible();

        await myTagPage.createNewTag('t2', 'fixture-t2');
        await expect(myTagPage.getXpathTagName('t2')).toBeVisible();

        await use(myTagPage);

        tagNameList.push('t1', 't2');
        page.on('dialog', (dialog) => dialog.accept());
        for (const tag of tagNameList) {
            let locatorTag = myTagPage.getXpathTagName(tag);
            await locatorTag.hover();
            await myTagPage.getXpathDelete(tag).click();
            await expect(locatorTag).toBeHidden();
        }
        console.log('Đã xoá t1, t2');
    }
})
