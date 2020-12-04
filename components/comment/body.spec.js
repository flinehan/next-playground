import Comment from './index'
import { mount } from 'enzyme';

const commentMock = {
  "id": "1",
  "title": "title",
  "body": "<p>body</p>",
  "status": "PUBLISHED",
  "limbo": false,
  "quarantine": false,
  "deleted": false,
  "approved": false,
  "sticky": false,
  "publishDate": "2015-12-26 17:45:14.0",
  "authorId": "123",
  "author": "frankTank",
  "avatar": "url.com",
  "avatarDownload": "url.com",
  "designations": [
    "comment"
  ],
  "files": [],
  "commentableId": "123",
  "IMadeIt": true,
  "rating": 0
}

describe('Comment Component', () => {
  it('should render without crashing', () => {
    const wrapper = mount(
      <Comment comment={commentMock} />
    );

    expect(wrapper.find('div')).toBeTruthy();
  });
});