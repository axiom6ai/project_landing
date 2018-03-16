import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const members = [{
    id: 1,
    firstName: 'Mohammad',
    lastName: 'Rafsan',
    pictureKey: 'mohammad_rafsan.jpg',
    bio: {
        en: '',
        fr: '',
        ch: ''
    }
}, {
    id: 2,
    firstName: 'William',
    lastName: 'Hoang',
    pictureKey: 'william_hoang.jpg',
    bio: {
        en: '',
        fr: '',
        ch: ''
    }

}, {
    id: 3,
    firstName: 'Anqi',
    lastName: 'Xu',
    pictureKey: 'anqi_xu.jpg',
    bio: {
        en: '',
        fr: '',
        ch: ''
    }
}, {
    id: 4,
    firstName: 'Xueqi',
    lastName: 'Gao',
    pictureKey: 'xueqi_gao.jpg',
    bio: {
        en: '',
        fr: '',
        ch: ''
    }
}, {
    id: 5,
    firstName: 'Giovanni',
    lastName: 'Laquidara',
    pictureKey: 'giovanni_laquidara.jpg',
    bio: {
        en: '',
        fr: '',
        ch: ''
    }
}, {
    id: 6,
    firstName: 'Julien',
    lastName: 'Saad',
    pictureKey: 'julien_saad.jpg',
    bio: {
        en: '',
        fr: '',
        ch: ''
    }
}, {
    id: 7,
    firstName: 'Shehaaz',
    lastName: 'Saif',
    pictureKey: 'shehaaz_saif.jpg',
    bio: {
        en: '',
        fr: '',
        ch: ''
    }
}];

class MemberApi {
  static getAllMembers() {
      return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], members));
      }, delay);
    });
  }

  static getMemberPictures() {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve(importAllPics(require.context('../images/members', false, /\.(png|jpe?g|svg)$/)));
          }, delay);
      });
  }
}

function importAllPics(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

export default MemberApi;
