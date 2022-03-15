import BoardPage from '../pages/BoardPage';
import Card from '../components/Card';

test('Contener card', ()=> {
    expect(BoardPage.contains('Card')).toBeTruthy();
})

test('hay card?', ()=> {
    expect(BoardPage).toContain(Card);
})

test('hay titulo?', ()=> {
    expect(Card).toContain(title);
})