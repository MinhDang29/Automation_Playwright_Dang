import { expect, test } from '@playwright/test';
import { PersonalNotes } from '../../../pages/personal-notes-page';


const notes = [
    { title: 'title 1', content: 'content 2' },
    { title: 'title 2', content: 'content 2' },
    { title: 'title 3', content: 'content 3' },
    { title: 'title 4', content: 'content 5' },
    { title: 'title 5', content: 'content 4' },
    { title: 'title 6', content: 'content 6' },
    { title: 'title 7', content: 'content 7' },
    { title: 'title 8', content: 'content 8' },
    { title: 'title 9', content: 'content 9' },
    { title: 'title 10', content: 'content 10' }
];

test('Add personal notes', async ({ page }) => {
    let personalNotesPage = new PersonalNotes(page);

    await test.step('Đi đến trang Personal Notes Page', async () => {
        await personalNotesPage.goToPersonalNotesPage();
    })

    await test.step('Thêm mới 10 note có nội dung là tiêu đề và một phần ngắn', async () => {
        for (const note of notes) {
            await personalNotesPage.fillTitle(note.title);
            await personalNotesPage.fillContent(note.content);
            await personalNotesPage.clickAddNote();
        }
    })

    await test.step('Thực hiện search theo tiêu đề bài báo bất kì.', async () => {
        await personalNotesPage.searchNote('title 7');
    })

    await test.step('Kiểm tra tất cả các bài báo search được đều chứa keyword đã tìm kiếm', async () => {
        const listTitles = await personalNotesPage.getAllTitleInList();
        for (let i = 0; i < listTitles.length; i++) {
            expect(listTitles[i]).toContain('title 7');
        }
    })
})