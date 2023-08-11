/**
    @fileoverview <H5><font color="#8A8A8A">module:</font><font color="#AA6600">Team Statistics</font></H5>    
*/

function leagueChanged_106510324 ()
{
    UDModule.COMP.replaceDynamicHtml ("tdTeamStats", "");
    UDModule.COMP.replaceDynamicHtml ("tdNormalTable", "");
    UDModule.COMP.fillDefaultValueDD ("cbTeams", 0, "[Choose One]");
    
    fillSeasonMod2_106510324 ();
}

function seasonChanged_106510324 ()
{
    UDModule.COMP.replaceDynamicHtml ("tdTeamStats", "");
    UDModule.COMP.replaceDynamicHtml ("tdNormalTable", "");

    fillTeamMod2_106510324 ();
}

function teamChanged_106510324 ()
{
    UDModule.COMP.replaceDynamicHtml ("tdTeamStats", "");
    UDModule.COMP.replaceDynamicHtml ("tdNormalTable", "");
}

function showClicked_106510324 ()
{
    if (isValidData_106510324 ())
    {
        var xmlDoc = UDModule.PROJ.processRequest (getTeamStatsParam_106510324 ());
        if (UDModule.PROJ.isValidStatus (xmlDoc))    
        {
            if (isValidStatus_T6_106510324 (xmlDoc))
                showTeamStatsData_106510324 (xmlDoc);
        }
    }
}