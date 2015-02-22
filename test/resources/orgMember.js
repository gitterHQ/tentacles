var GHClient = require('../..');
var assert = require('assert');

describe('orgMember', function() {

  describe('pre-moondragon', function() {
    var ghClient;

    before(function() {
      ghClient = new GHClient({ accessToken: process.env.GITHUB_ACCESS_TOKEN });
    });

    it('listMembers', function(done) {
      ghClient.orgMember.listMembers('gitterHQ')
        .spread(function(members) {
          assert(Array.isArray(members));
          assert(members.length > 0);
        })
        .nodeify(done);
    });

    it('checkMembershipForUser success', function(done) {
      ghClient.orgMember.checkMembershipForUser('gitterHQ', 'suprememoocow')
        .spread(function(result) {
          assert(result);
        })
        .nodeify(done);
    });

    it('checkMembershipForUser fail', function(done) {
      ghClient.orgMember.checkMembershipForUser('gitterHQ', 'tj')
        .spread(function(result) {
          assert(!result);
        })
        .nodeify(done);
    });

    it('listPublicMembers', function(done) {
      ghClient.orgMember.listPublicMembers('gitterHQ')
        .spread(function(members) {
          assert(Array.isArray(members));
          assert(members.length > 0);
        })
        .nodeify(done);
    });

    it('checkPublicMembership', function(done) {
      ghClient.orgMember.checkPublicMembership('gitterHQ', 'tj')
        .spread(function(result) {
          assert(!result);
        })
        .nodeify(done);
    });

  });

  describe('post-moondragon', function() {
    var ghClient;

    before(function() {
      ghClient = new GHClient({
        accessToken: process.env.GITHUB_ACCESS_TOKEN,
        headers: {
          'Accept': 'application/vnd.github.moondragon+json'
        }
      });
    });

    it('listMembers', function(done) {
      ghClient.orgMember.listMembers('gitterHQ')
        .spread(function(members) {
          assert(Array.isArray(members));
          assert(members.length > 0);
        })
        .nodeify(done);
    });

    it('checkMembershipForUser success', function(done) {
      ghClient.orgMember.checkMembershipForUser('gitterHQ', 'suprememoocow')
        .spread(function(result) {
          assert(result);
        })
        .nodeify(done);
    });

    it('checkMembershipForUser fail', function(done) {
      ghClient.orgMember.checkMembershipForUser('gitterHQ', 'tj')
        .spread(function(result) {
          assert(!result);
        })
        .nodeify(done);
    });

    it('listPublicMembers', function(done) {
      ghClient.orgMember.listPublicMembers('gitterHQ')
        .spread(function(members) {
          assert(Array.isArray(members));
          assert(members.length > 0);
        })
        .nodeify(done);
    });

    it('checkPublicMembership', function(done) {
      ghClient.orgMember.checkPublicMembership('gitterHQ', 'tj')
        .spread(function(result) {
          assert(!result);
        })
        .nodeify(done);
    });

    it('getMembershipForUser', function(done) {
      ghClient.orgMember.getMembershipForUser('gittertestbotorg', 'gittertestbot')
        .spread(function(membership) {
          assert(membership);
          assert(membership.organization);
          assert(membership.user);
        })
        .nodeify(done);
    });

    it('getMembershipForUser non-existant', function(done) {
      ghClient.orgMember.getMembershipForUser('gittertestbotorg', 'asdasdasdasdasdasdasdasd')
        .spread(function(membership) {
          assert(!membership);
        })
        .nodeify(done);
    });

    it('getMembershipForUser non-member', function(done) {
      ghClient.orgMember.getMembershipForUser('gittertestbotorg', 'tj')
        .spread(function(membership) {
          assert(!membership);
        })
        .nodeify(done);
    });

    it('listMembershipsForAuthUser non-member', function(done) {
      ghClient.orgMember.listMembershipsForAuthUser('gittertestbotorg')
        .spread(function(memberships) {
          assert(Array.isArray(memberships));
          assert(memberships.length > 0);
        })
        .nodeify(done);
    });

    it('getMembershipForAuthUser success', function(done) {
      ghClient.orgMember.getMembershipForAuthUser('gittertestbotorg')
        .spread(function(membership) {
          assert(membership);
          assert(membership.organization);
          assert(membership.user);
        })
        .nodeify(done);
    });

    it('getMembershipForAuthUser non-member', function(done) {
      ghClient.orgMember.getMembershipForAuthUser('joyent')
        .spread(function(membership) {
          assert(!membership);
        })
        .nodeify(done);
    });

    it('getMembershipForAuthUser non-org', function(done) {
      ghClient.orgMember.getMembershipForAuthUser('asldkjasdlkasjdsakljdslsak')
        .spread(function(membership) {
          assert(!membership);
        })
        .nodeify(done);
    });

  });

});
