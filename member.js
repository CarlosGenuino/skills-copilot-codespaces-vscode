function skillsMember() {
    return {
        name: "member",
        displayName: "Member",
        description: "This skill is used to get information about a member of the team.",
        parameters: [
            {
                name: "memberId",
                displayName: "Member ID",
                type: "string",
                description: "The ID of the member to get information about."
            }
        ],
        execute: async function (context, parameters) {
            const memberId = parameters.memberId;
            // Replace with actual implementation to get member info
            const memberInfo = await getMemberInfo(memberId);
            return memberInfo;
        }
    };
}