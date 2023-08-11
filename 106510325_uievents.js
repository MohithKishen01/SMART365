/**
    @fileoverview <H5><font color="#8A8A8A">module:</font><font color="#AA6600">Team Statistics Ex</font></H5>    
*/

function leagueChanged_106510325 ()
{
    clearValues_106510325 ();    
    UDModule.COMP.fillDefaultValueDD ("cbTeams", 0, "[Choose One]");
    
    fillSeasonMod2_106510325 ();
}

function seasonChanged_106510325 ()
{
    clearValues_106510325 ();
    fillTeamMod2_106510325 ();    
}

function teamChanged_106510325 ()
{
    clearValues_106510325 ();
}

function showClicked_106510325 ()
{
    if (isValidData_106510325 ())
    {
        var xmlDoc = UDModule.PROJ.processRequest (getTeamStatsParam_106510325 ());
        if (UDModule.PROJ.isValidStatus (xmlDoc))    
        {
            if (isValidStatus_T6_106510325 (xmlDoc))
                showTeamStatsData_106510325 (xmlDoc);
        }
    }    
}