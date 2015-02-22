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
        .then(function(members) {
          assert(Array.isArray(members));
          assert(members.length > 0);
        })
        .nodeify(done);
    });

    it('checkMembershipForUser success', function(done) {
      ghClient.orgMember.checkMembershipForUser('gitterHQ', 'suprememoocow')
        .then(function(result) {
          assert(result);
        })
        .nodeify(done);
    });

    it('checkMembershipForUser fail', function(done) {
      ghClient.orgMember.checkMembershipForUser('gitterHQ', 'tj')
        .then(function(result) {
          assert(!result);
        })
        .nodeify(done);
    });

    it('listPublicMembers', function(done) {
      ghClient.orgMember.listPublicMembers('gitterHQ')
        .then(function(members) {
          assert(Array.isArray(members));
          assert(members.length > 0);
        })
        .nodeify(done);
    });

    it('checkPublicMembership', function(done) {
      ghClient.orgMember.checkPublicMembership('gitterHQ', 'tj')
        .then(function(result) {
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
        .then(function(members) {
          assert(Array.isArray(members));
          assert(members.length > 0);
        })
        .nodeify(done);
    });

    it('checkMembershipForUser success', function(done) {
      ghClient.orgMember.checkMembershipForUser('gitterHQ', 'suprememoocow')
        .then(function(result) {
          assert(result);
        })
        .nodeify(done);
    });

    it('checkMembershipForUser fail', function(done) {
      ghClient.orgMember.checkMembershipForUser('gitterHQ', 'tj')
        .then(function(result) {
          assert(!result);
        })
        .nodeify(done);
    });

    it('listPublicMembers', function(done) {
      ghClient.orgMember.listPublicMembers('gitterHQ')
        .then(function(members) {
          assert(Array.isArray(members));
          assert(members.length > 0);
        })
        .nodeify(done);
    });

    it('checkPublicMembership', function(done) {
      ghClient.orgMember.checkPublicMembership('gitterHQ', 'tj')
        .then(function(result) {
          assert(!result);
        })
        .nodeify(done);
    });

    it('getMembershipForUser', function(done) {
      ghClient.orgMember.getMembershipForUser('gittertestbotorg', 'gittertestbot')
        .then(function(membership) {
          assert(membership);
          assert(membership.organization);
          assert(membership.user);
        })
        .nodeify(done);
    });

    it('getMembershipForUser non-existant', function(done) {
      ghClient.orgMember.getMembershipForUser('gittertestbotorg', 'asdasdasdasdasdasdasdasd')
        .then(function(membership) {
          assert(!membership);
        })
        .nodeify(done);
    });

    it('getMembershipForUser non-member', function(done) {
      ghClient.orgMember.getMembershipForUser('gittertestbotorg', 'tj')
        .then(function(membership) {
          assert(!membership);
        })
        .nodeify(done);
    });

    it('listMembershipsForAuthUser non-member', function(done) {
      ghClient.orgMember.listMembershipsForAuthUser('gittertestbotorg')
        .then(function(memberships) {
          assert(Array.isArray(memberships));
          assert(memberships.length > 0);
        })
        .nodeify(done);
    });

    it('getMembershipForAuthUser success', function(done) {
      ghClient.orgMember.getMembershipForAuthUser('gittertestbotorg')
        .then(function(membership) {
          assert(membership);
          assert(membership.organization);
          assert(membership.user);
        })
        .nodeify(done);
    });

    it('getMembershipForAuthUser non-member', function(done) {
      ghClient.orgMember.getMembershipForAuthUser('joyent')
        .then(function(membership) {
          assert(!membership);
        })
        .nodeify(done);
    });

    it('getMembershipForAuthUser non-org', function(done) {
      ghClient.orgMember.getMembershipForAuthUser('asldkjasdlkasjdsakljdslsak')
        .then(function(membership) {
          assert(!membership);
        })
        .nodeify(done);
    });

  });

});
