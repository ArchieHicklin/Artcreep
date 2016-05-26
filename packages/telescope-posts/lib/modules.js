Telescope.modules.add("postsListTop", {
  template: "views_menu",
  order: 1
});

Telescope.modules.add("postComponents", [
  {
    template: 'post_rank',
    order: 1
  },
  {
    template: 'post_content',
    order: 20
  },
]);

Telescope.modules.add("postHeading", [
  {
    template: 'post_title',
    order: 10
  },
  {
    template: 'post_avatars',
    order: 20
  },
]);

Telescope.modules.add("postMore", [
  {
    template: 'post_author',
    order: 20
  },
]);

Telescope.modules.add("postMeta", [
  {
    template: 'post_vote',
    order: 40
  },
  {
    template: 'post_info',
    order: 50
  },
  {
    template: 'post_discuss',
    order: 60
  },
  {
    template: 'post_share',
    order: 70
  },
  {
    template: 'post_admin',
    order: 80
  }
]);
